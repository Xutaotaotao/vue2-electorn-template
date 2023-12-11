<template>
  <div>
    <div>Hello Vite Vue2 ssssssass s s</div>
    <button @click="openDevTool">打开Devtool</button>
    <button @click="getNodeById">获取id为s-top-left的元素</button>
    <webview id="webview" webpreferences="nodeIntegration" style="height: 500px" src="https://www.baidu.com/" />
  </div>
</template>
<script>
export default {
  name: 'APP',
  mounted() {
    const webview = document.getElementById('webview');
    setTimeout(() => {
      webview.openDevTools();
    }, 3000);

    webview.addEventListener('ipc-message', (event,data) => {
      console.log(event.args?.[0])
      if (event.channel === 'getNodeById') {
        console.log('getNodeById')
      }
      if (event.channel === 'click') {
        console.log('click')
      }
    })

  },
  methods: {
    openDevTool() {
      window.nativeBridge.openDevTool()
    },
    getNodeById() {
      const webview = document.getElementById('webview');
      webview.send('getNodeById',{id:'s-top-left'})
    }
  }
}
</script>