import { app, BrowserWindow, Menu, MessageChannelMain } from "electron";
import { join, resolve } from "path";
import { initIpc } from "./ipc";
import { initUpadate } from "./update";
import { initDb } from "@/lowdb/low";

let workWindow: any = null;
let mainWindow: any = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 720,
    webPreferences: {
      webviewTag: true,
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });

  if (import.meta.env.MODE === "dev") {
    if (import.meta.env.VITE_DEV_SERVER_URL) {
      mainWindow.loadURL(import.meta.env.VITE_DEV_SERVER_URL);
      mainWindow.webContents.openDevTools();
    }
  } else {
    mainWindow.loadFile(resolve(__dirname, "../render/index.html"));
  }

  mainWindow.webContents.on(
    "will-attach-webview",
    (_: any, webpreferences: any) => {
      webpreferences.preload = join(__dirname, "../webview/index.cjs");
    }
  );
};

const creatMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => {
            mainWindow.webContents.send("update-counter", 1);
          },
          label: "IncrementNumber",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
  creatMenu();
  initDb().then(() => {
    createWindow();
    initIpc(mainWindow, workWindow);
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  initUpadate();
});

app.on("window-all-closed", () => {
  app.quit();
});

export const openDevTool = () => {
  if (mainWindow) {
    mainWindow.webContents.openDevTools();
  }
};

export { mainWindow };
