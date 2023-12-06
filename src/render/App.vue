<template>
  <div>
    <div>Hello Vite Vue2</div>
    <button @click="openDevTool">打开Devtool</button>
  </div>

</template>
<script>
export default {
  name:'APP',
  methods: {
    openDevTool(){
      window.nativeBridge.openDevTool()
    }
  }
}
</script>