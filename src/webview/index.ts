const {ipcRenderer} = require('electron')

window.addEventListener('click',(event:MouseEvent) => {
  const target = event.target as HTMLElement;
  ipcRenderer.sendToHost('click',{data:target?.innerHTML})
})

ipcRenderer.on('getNodeById',(e,data) => {
  const node = document.getElementById(data.id)
  console.log(node?.innerHTML)
  ipcRenderer.sendToHost('getNodeById',{data:node?.innerHTML})
})