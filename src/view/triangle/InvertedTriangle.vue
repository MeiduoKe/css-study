<template>
    <div class = "container">
        <div class = "inverted-triangle-demo"/>
        <div class = "inverted-triangle-demo1"/>
        <div class = "inverted-triangle-demo2"/>
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

.container > div {
  margin: 4vh;
}

.inverted-triangle-demo {
  height: 0;
  width: 0;
  border: 15vh solid transparent;
  border-left-color: black;
  border-right-color: blue;
  border-top-color: red;
  border-bottom-color: green;
}

.inverted-triangle-demo1 {
  height: 5vh;
  width: 5vh;
  border: 10vh solid red;
  border-right-color: blue;
  border-bottom-color: green;
  border-left-color: black;
}

.inverted-triangle-demo2 {
  height: 0;
  width: 0;
  border: 15vh solid transparent;
  border-top-color: black;
}
</style>