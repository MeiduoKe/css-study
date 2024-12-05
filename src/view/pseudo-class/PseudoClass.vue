<!-- 伪类选择器 -->
<template>
    <div class = "parent">
        <div class = "child">伪类1</div>
        <div class = "child">伪类2</div>
        <div class = "child">伪类3</div>
        <div class = "child">伪类4</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
        <div class = "child">伪类5</div>
    </div>

    <p></p>
    <p>1</p>

    <div>
        <input type = "text"/>
    </div>

    <div style="display: flex">
        <input type = "checkbox"/>
        <p style = "color: blue;">checkbox</p>
    </div>


</template>

<style scoped lang = "scss">
.parent {
  font-size: 24px;
  color: rgb(189, 189, 189);
}

/** (从前开始) 作为其父元素的第n个子元素的一个元素*/
.child:nth-child(3) {
  color: blue;
}

/** (从后开始) 作为其父元素的第n个子元素的一个元素*/
.child:nth-last-child(1) {
  color: blueviolet;
}

/** even 偶数行 odd 基数行 n 表示倍数*/
//.child:nth-child(odd) {
//.child:nth-child(2n) {
.child:nth-child(even) {
  color: aqua;
}

/** 父元素的第一个子元素 */
.child:first-child {
  color: rgba(6, 65, 147, 0.99);
}

/** 父元素的最后一个子元素 */
.child:last-child {
  color: darkgreen;
}

/** 空元素 */
p:empty {
  width: 100px;
  height: 100px;
  background-color: chartreuse;
}

input:focus {
  background-color: blueviolet;
}

input:checked ~ p {
  background-color: darkgreen;
  color: red;
}

</style>
<script setup lang = "ts">
</script>