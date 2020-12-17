<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import "./assets/app.less";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// HTML多次点击字体背景颜色变蓝
// 原因：变蓝是因为浏览器添加了默认的事件
html, body {
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul, ol, li {
  list-style: none;
}
img {
  border: none;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #232323;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
}
input, textarea, button {
  outline: none;
  border: none;
}
textarea {
  resize: none;
  overflow: auto;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
