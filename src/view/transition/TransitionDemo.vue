<template>
    <!-- CSS转换（transforms）允许您移动、旋转、缩放和倾斜元素 -->
    <!-- transforms-property：规定过渡效果的CSS属性名称 -->
    <!-- none: 没有属性会获得过渡效果 -->
    <!-- all: 所有属性会获得过渡效果 -->
    <!-- property定义应用过渡效果的CSS属性名称列表，列表以逗号隔开 -->
    <div class = "container">
        <div class = "transition-demo transition-demo-1">
            <div class = "transition-demo-width"></div>
        </div>

        <!-- linear 规定以相同的速度开始至结束的过渡效果 -->
        <!-- ease 规定慢速开始，然后变快，然后慢速结束的过渡效果 -->
        <!-- ease-in 规定以慢速开始的过渡效果 -->
        <!-- ease-out 规定以慢速结束的过渡效果 -->
        <!-- ease-in-out 规定以慢速开始和结束的过渡效果 -->
        <div class = "transition-demo transition-demo-2">
            <div class = "transition-demo-timing"></div>
        </div>

        <div class = "transition-demo transition-demo-3">
            <div class = "transition-demo-cubic"></div>
        </div>

        <div class = "transition-demo transition-demo-4">
            <div class = "transition-demo-delay"></div>
        </div>
    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.container {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #40514e;
  overflow: hidden;
}

.transition-demo {
  margin: 1vh auto;
  width: 40vw;
  height: 18vh;
  position: relative;
}

.transition-demo-1 {
  background-color: #788491;
}

.transition-demo > div {
  width: 50%;
  height: 50%;
  background-color: #b83b5e;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.transition-demo-width {
  transition-property: width, height;
  transition-duration: 1s;
}

.transition-demo-width:hover {
  width: 80%;
  height: 80%;
}

.transition-demo-2 {
  background-color: #788491;
}

.transition-demo-timing {
  background-color: #6a2c70;
  transition-property: width, height;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

.transition-demo-timing:hover {
  width: 80%;
  height: 80%;
}

.transition-demo-3 {
  background-color: #788491;
}

.transition-demo-cubic {
  transition-property: width, height;
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(1,.41,0,.5);
}

.transition-demo-cubic:hover {
  width: 80%;
  height: 80%;
}

.transition-demo-4 {
  background-color: #788491;
}

.transition-demo-delay {
  transition-property: width, height;
  transition-duration: 1.5s;
  transition-timing-function: linear;
  transition-delay: 0.5s;
}

.transition-demo-delay:hover {
  width: 80%;
  height: 80%;
}

</style>