<template>
    <div class = "container">
        <div class = "img">
            <img src="@/assets/images/1.jpg" alt=""/>
        </div>
        <div class = "img">
            <img src="@/assets/images/2.jpg" alt=""/>
        </div>
        <div class = "img">
            <img src="@/assets/images/3.jpg" alt=""/>
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

.container {
  width: 100vw;
  height: 100vh;
  background-color: #788491;
  display: flex;
}

.img {
  margin: 15vh 5vw;
  flex: 1;
  height: 32vh;
  box-shadow:  0 0 0 15px #788491,
  -30px -30px 0 0 #6a2c70,
  30px 30px 0 0 #f08a5d,
  0 0 0 30px #ffffff;
  opacity: 1;
  transform: skew(0deg);
  transition-property: opacity, transition;
  transition-duration: .5s;
}

.img:hover {
  opacity: 0.5;
  transform: skew(1deg);
}

.img > img {
  width: 100%;
  height: 100%;
}
</style>