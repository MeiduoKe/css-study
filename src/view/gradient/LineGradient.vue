<template>
    <div class = "container">
        <div class ="linear-gradient-demo"></div>
        <div class="linear-gradient-demo2"></div>
        <div class="linear-gradient-demo3"></div>
        <div class="linear-gradient-demo4"></div>
        <div class="linear-gradient-demo5"></div>

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
  flex-wrap: wrap;
}

.container > div {
  margin: 4vh;
  flex: 1;
  min-width: 25%;
  max-width: 25%;
  height: 18vw;
  line-height: 18vw;
  text-align: center;
}

.linear-gradient-demo {
  /** linear-gradient 不能设置在 background-color上面 */
  //background: linear-gradient(to right, #b83b5e, #f08a5d);
  //background: linear-gradient(to top right, #b83b5e, #f08a5d);
  background: linear-gradient(45deg, #b83b5e, #f08a5d, #f9ed69, #ff2e63);
}

.linear-gradient-demo2 {
  background: linear-gradient(#b83b5e 0%, #b83b5e 25%,
          #f08a5d 25%, #f08a5d 50%,
          #f9ed69 50%, #f9ed69 75%,
          #ff2e63 75%, #ff2e63 100%);
}

.linear-gradient-demo3 {
  background: repeating-linear-gradient(#b83b5e 0%, #b83b5e 10%,#f08a5d 10%, #f08a5d 20%);
}

.linear-gradient-demo4 {
  border-radius: 50%;
  background: radial-gradient(#b83b5e 25%, #f08a5d 50%, #ff2e63 75%);
}

.linear-gradient-demo5 {
  border-radius: 50%;
  background: repeating-radial-gradient(
                  #ff9a00 0%, #ff9a00 15%,
                  #11999e 15%, #11999e 30%,
                  #ff2e63 30%, #ff2e63 45%);
}
</style>