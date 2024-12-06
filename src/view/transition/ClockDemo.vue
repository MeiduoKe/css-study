<template>
    <div class = "container"></div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.container {
  --container-width: 35vw;
  --pointer-height: 14vw;
  --pointer-center: 0.5vw;

  margin: 10vh auto;
  width: var(--container-width);
  height: var(--container-width);
  background-color: #8785a2;
  border: 1px solid #112d4e;
  border-radius: 50%;
  position: relative;
  transition: all 30s steps(60);
}

.container:before {
  content: "";
  height: var(--pointer-center);
  width: var(--pointer-center);
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container:after {
  content: "";
  height: var(--pointer-height);
  width: 10px;
  position: absolute;
  left: 50%;
  top: calc(var(--container-width) / 2 - var(--pointer-height) - var(--pointer-center));
  transform: translate(-50%, 0);
  background-color: black;
}

.container:hover {
  rotate: (360deg);
}
</style>