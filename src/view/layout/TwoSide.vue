<!-- 双边布局 使用浮动和外边距实现  -->
<template>
    <div class="container">
        <div class="layout-demo1">
            <div class="layout-demo1-left"></div>
            <div class="layout-demo1-right"></div>
        </div>
        <div class="layout-demo2"></div>
    </div>

</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">

.container {
  margin: 1vh auto;
  width: 80vw;
  height: 98vh;
  background-color: #788491;
}

.layout-demo1 {
  width: 80vw;
  height: 100%;
  border: 1px solid red;

  .layout-demo1-left {
    width: 300px;
    height: 100%;
    float: left;
    background-color: dodgerblue;
  }

  .layout-demo1-right {
    height: 100%;
    background-color: gold;
    margin-left: 300px;
  }
}
</style>