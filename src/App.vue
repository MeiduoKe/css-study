<template>
    <div class="back-btn">
        <router-link to = "/">返回首页</router-link>
    </div>
    <router-view />
</template>

<style scoped lang="scss">

.back-btn {
  width: 5vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #788491;
  position: absolute;
  right: 1vw;
  top: 2vh;
  border-radius: 0.3vw;
  text-align: center;

  & > a {
    margin: 0;
    padding: 0;
    font-size: 0.8vw;
    text-decoration: none;
    color: #ffffff;
  }
}
</style>

