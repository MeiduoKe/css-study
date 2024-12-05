<template>
    <div class = "container">
        <div class = "shadow-box-demo1">
            <span>使用box-shadow实现外边框</span>
        </div>
        <div class = "shadow-box-demo2">
            <span>使用box-shadow实现边框</span>
        </div>
    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.container {
  padding: 3vh;
  width: 100vw;
  height: 100vh;
  background-color: #788491;
}

.container > div {
  margin: 5vh auto;
  width: 18vw;
  height: 18vw;
  line-height: 18vw;
  text-align: center;
  background-color: #fc5185;
}

.shadow-box-demo1 {
  box-shadow: 0 -15px 0 0 #00adb5,
  15px 0 0 0 #6a2c70,
  0 15px 0 0 #95e1d3,
  -15px 0 0 0 #40514e;
}
/*
 *  box-shadow 五个值
 * inset：内边框，可省略
 * 横向偏移量
 * 纵向偏移量
 * 模糊半径（高斯模糊）
 * 模糊边距
 */
.shadow-box-demo2 {
  box-shadow: inset 0 -15px 0 0 #00adb5,
  inset 15px 0 0 0 #6a2c70,
  inset 0 15px 0 0 #95e1d3,
  inset -15px 0 0 0 #40514e;
}
</style>