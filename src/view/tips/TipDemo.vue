<template>
    <div class = "container">
        <div class = "tip-demo">
            <span></span>
            <span>灵蛇献瑞 前程巳锦</span>
        </div>
    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: #788491;
  display: flex;
  flex-wrap: wrap;
}

.tip-demo {
  height: 50vh;
  width: 50vw;
  margin: 10vh auto;
  position: relative;
}

.tip-demo > span {
  height: 0;
  width: 0;
  position: absolute;
}

.tip-demo > span:first-child {
  height: 0;
  width: 0;
  left: 25px;
  top: 35px;
  border: 26px solid transparent;
  border-top-color: #b83b5e;
}

.tip-demo > span:last-child {
  width: 260px;
  height: 35px;
  line-height: 35px;
  text-indent: 1em;
  background-color: #b83b5e;
}
</style>