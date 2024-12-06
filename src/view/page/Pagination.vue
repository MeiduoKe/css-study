<template>
    <div class = "container">
        <a href="" class="container-page-item page-current">1</a>
        <a href="" class="container-page-item">2</a>
        <a href="" class="container-page-item">3</a>
        <a href="" class="container-page-item">4</a>
        <a href="" class="container-page-item">5</a>
        <a href="" class="container-page-item">6</a>
        <a href="" class="container-page-item">7</a>
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
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0;
}

.container-page-item {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #6a2c70;
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #defcf9;
  background-color: #cadefc;
}

.container-page-item:nth-child(1n + 2) {
  margin-left: 5px;
}

.container-page-item:hover, .page-current{
  color: #52616b;
  border: 1px solid #6fe7dd;
  background-color: #3490de;
}
</style>