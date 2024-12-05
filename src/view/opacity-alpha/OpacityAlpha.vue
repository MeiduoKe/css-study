<!-- 透明和滤镜 -->
<template>
    <div class = "demo-page">
        <!-- opacity 透明度 -->
        <div class = "demo-page-opacity">
            <img src = "@/assets/images/2.jpg" alt = "opacity透明度">
        </div>

        <!-- alpha 通道 -->
        <div class = "demo-page-alpha">
            <img src = "@/assets/images/2.jpg" alt = "alpha通道">
        </div>

        <!-- filter opacity 透明度 -->
        <div class = "demo-page-filter">
            <img src = "@/assets/images/2.jpg" alt = "filter opacity 透明度">
        </div>

    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.demo-page {
  margin: 1vh auto;
  height: 100vh;
  overflow: auto;
}

.demo-page img{
  margin: auto;
  width: 100%;
  height: 85vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.demo-page-opacity {
  margin: 1vh auto;
  width: 70vw;
  height: 85vh;
  position: relative;
}

.demo-page-opacity > img {
  opacity: 0.5;
  transition: 1.5s;
}

.demo-page-opacity > img:hover {
  opacity: 0.9;
  transition: 1.5s;
}

.demo-page-alpha {
  margin: 1vh auto;
  width: 70vw;
  height: 85vh;
  background-color: rgba(255, 0, 0, 0.5);
  position: relative;
}

.demo-page-filter {
  margin: 1vh auto;
  width: 70vw;
  height: 85vh;
  position: relative;
}

.demo-page-filter > img {
  transition: 1.5s;
  filter: opacity(50%);
}

.demo-page-filter > img:hover {
  transition: 1.5s;
  filter: opacity(100%);
}


</style>