<template>
  <div>
    <div>Hello Vite Vue2 ssssssass s s</div>
    <button @click="openDevTool">打开Devtool</button>
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

    window.nativeBridge.onMsgFromWebview((data) => {
      console.log(data)
    })
  },
  methods: {
    openDevTool() {
      window.nativeBridge.openDevTool()
    }
  }
}
</script>