<template>
    <div class = "demo-page">
        <!-- 外边距水平居中 -->
        <div class = "demo-page-demo1"></div>

        <!-- line-height垂直居中(内联元素不支持宽高的设置) -->
        <div class = "demo-page-demo2">
            <span>line-height垂直居中</span>
        </div>

        <!-- 内联元素居中，需要设置 display: inline-block -->
        <div class = "demo-page-demo3">
            <div>内联元素居中</div>
        </div>

        <!-- 内边距垂直居中 -->
        <div class = "demo-page-demo4">
            <div>内边距垂直居中</div>
        </div>

        <!-- 定位居中·-->
        <div class = "demo-page-demo5">
            <div>定位居中</div>
        </div>


        <!-- calc配合定位居中 -->
        <div class = "demo-page-demo6">
            <div>calc配合定位居中</div>
        </div>

        <!-- 外边距居中 margin-top 使用百分比参考的是水平方向的宽度-->
        <div class = "demo-page-demo7">
            <div>外边距居中</div>
        </div>

        <!-- 弹性盒子居中·-->
        <div class = "demo-page-demo8">
            <div>弹性盒子居中</div>
        </div>

        <!-- 定位配合transform居中 -->
        <div class = "demo-page-demo9">
            <div>定位配合transform居中</div>
        </div>

        <!-- Grid 方法居中 -->
        <div class = "demo-page-demo10">
            <div>Grid 方法居中</div>
        </div>

    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
* {
  margin: 0;
  padding: 0;
}

.demo-page {
  margin-left: 10vw;
  margin-top: 10vh;
  width: 80vw;
  height: 80vh;
  overflow-y: auto;
  background-color: #788491;
}

.demo-page-demo1 {
  width: 50vw;
  height: 5vh;
  background-color: blue;
  margin: 1.5vh auto;
}

.demo-page-demo2 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  background-color: cadetblue;
}

.demo-page-demo3 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  background-color: burlywood;
}

.demo-page-demo3 > div {
  display: inline-block; /** 内联元素居中，需要设置 display: inline-block */
  width: 80%;
  height: 5vh;
  line-height: 5vh;
  background-color: blueviolet;
}

.demo-page-demo4 {
  width: 38vw;
  height: 8vh;
  padding: 4vh 19vw;
  margin: 1.5vh auto;
  background-color: cornflowerblue;
}

.demo-page-demo4 > div {
  width: 38vw;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  background-color: fuchsia;
}

.demo-page-demo5 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  background-color: gold;
  position: relative;
}

.demo-page-demo5 > div {
  width: 40vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: indigo;
  position: absolute;
  top: 1vh;
  left: 5vw;
}

.demo-page-demo6 {
  --parent-width: 50vw;
  --parent-height: 8vh;

  --child-width: 40vw;
  --child-height: 6vh;

  width: var(--parent-width);
  height: var(--parent-height);
  margin: 1.5vh auto;
  position: relative;
  background-color: dodgerblue;
}

.demo-page-demo6 > div {
  width: var(--child-width);
  height: var(--child-height);
  line-height: var(--child-height);
  text-align: center;
  background-color: indigo;
  position: absolute;
  top: calc((var(--parent-height) - var(--child-height)) / 2);
  left: calc((var(--parent-width) - var(--child-width)) / 2);
}

.demo-page-demo7 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  background-color: gold;
  position: relative;
}

.demo-page-demo7 > div {
  width: 40vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: indigo;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.demo-page-demo8 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  background-color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-page-demo8 > div {
  width: 40vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: indigo;
}


.demo-page-demo9 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  background-color: gold;
  position: relative;
}

.demo-page-demo9 > div {
  width: 40vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: indigo;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /** 自身偏移量 */
}

.demo-page-demo10 {
  width: 50vw;
  margin: 1.5vh auto;
  height: 8vh;
  background-color: gold;
  display: grid;
  place-items: center; /* 水平垂直居中的简写 */
}


.demo-page-demo10 > div {
  width: 40vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: indigo;
}
</style>