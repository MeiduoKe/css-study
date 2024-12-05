<!-- 双飞翼布局 使用定位和外边距实现(需要注意顺序的问题)  -->
<template>
    <div class = "container">
        <div class = "left"></div>
        <div class = "right"></div>
        <div class = "center"></div>
    </div>

</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.container {
  width: 100vw;
  height: 100vh;
  position: relative;
}


.left, .right {
  height: 100%;
  width: 300px;
  position: absolute;
}

.left {
  left: 0;
  background-color: fuchsia;
}

.center {
  height: 100%;
  margin-left: 300px;
  margin-right: 300px;
  background-color: blue;
}

.right {
  right: 0;
  background-color: gold;
}


</style>