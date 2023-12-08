const {ipcRenderer} = require('electron')

window.addEventListener('click',(event:MouseEvent) => {
  const target = event.target as HTMLElement;
  ipcRenderer.send('webView', {
    data: target?.innerHTML
  });
})