<template>
    <div class = "container">
        <div class = "font-face-demo">
            <span>灵蛇献瑞 前程巳锦</span>
        </div>

        <div class = "font-face-demo2">
            <span>腾云驾雾，坐观海潮</span>
        </div>
        <div class = "font-face-demo3">
            <span>古朴原味，匠人手作</span>
        </div>
    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
@font-face {
  font-family: "字魂风行手书";
  src: url("@/assets/font/字魂风行手书.ttf");
}

@font-face {
  font-family: "字魂龙腾楷书";
  src: url("@/assets/font/字魂龙腾楷书.ttf");
}

@font-face {
  font-family: "字魂观潮手书";
  src: url("@/assets/font/字魂观潮手书.ttf");
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #788491;
  display: flex;
  flex-wrap: wrap;
}

.container > div {
  margin: 4vh;
  flex: 1;
  min-width: 25%;
  max-width: 25%;
  height: 10vw;
  line-height: 10vw;
  text-align: center;
}

.font-face-demo {
  background-color: #40514e;

  & > span {
    font-family: "字魂风行手书", serif;
    font-size: 48px;
    font-weight: bold;
  }
}

.font-face-demo2 {
  background-color: #40514e;

  & > span {
    font-family: "字魂龙腾楷书", serif;
    font-size: 48px;
    font-weight: bold;
  }
}

.font-face-demo3 {
  background-color: #40514e;

  & > span {
    font-family: "字魂观潮手书", serif;
    font-size: 51px;
    font-weight: bold;
  }
}
</style>