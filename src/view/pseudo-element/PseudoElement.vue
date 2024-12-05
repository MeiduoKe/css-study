<!--     伪类选择器：伪装元素，但它不是元素   -->
<template>
    <div class = "page">
        <!--     ：after 在元素内容的最后插入内容   -->
        <!--     默认这个伪元素是行内元素，且继承元素可继承的属性;IE7-浏览器中必须声明!DOCTYPE，否则不起作用   -->
        <div style = "display: flex">
            <p class = "after-demo">在元素内容的最后插入内容</p>
        </div>

        <div style = "display: flex">
            <p class = "after-demo-1" data-fill = "after">在元素内容的最后插入内容</p>
        </div>
        <!-- 插入图片 -->
        <div style = "display: flex">
            <p class = "after-demo-2">在元素内容的最后插入内容</p>
        </div>

        <!--     ：before 在元素内容的最开始插入内容  -->
        <!--     默认这个伪元素是行内元素，且继承元素可继承的属性;IE7-浏览器中必须声明!DOCTYPE，否则不起作用   -->
        <div style = "display: flex">
            <p class = "before-demo">在元素内容的最开始插入内容</p>
        </div>

        <!--     ：first-letter 指定一个元素第一个字母的样式（只能与快级元素关联）   -->
        <div style = "display: flex">
            <p class = "first-letter-demo">指定一个元素第一个字母的样式</p>
        </div>


        <!--     ：first-line 设置元素第一行文本样式（只能与快级元素关联）  -->
        <div style = "display: flex">
            <p class = "first-line-demo">first-line 设置元素第一行文本样式（只能与快级元素关联）</p>
        </div>

        <!--     ：outline 默认边框  -->
        <div style = "display: flex">
            <input type="text" placeholder="请输入你想输入的内容" class="outline-demo">
        </div>
    </div>
</template>

<script setup lang = "ts">

</script>

<style scoped lang = "scss">
.page {
  margin-left: 10vw;
  margin-top: 10vh;
  width: 80vw;
  height: 80vh;
  color: darkgreen;
}

.after-demo:after {
  content: "after";
}

.after-demo-1:after {
  content: attr(data-fill);
}

.after-demo-2:after {
  content: '';
  display: block; /* 将伪元素变成块级元素 */
  width: 80px; /* 设置元素的宽度 */
  height: 80px; /* 设置元素的高度 */
  background-image: url("@/assets/images/骷髅打拳.png");
  background-size: cover;
}

.before-demo:before {
  content: '';
  display: block; /* 将伪元素变成块级元素 */
  width: 80px; /* 设置元素的宽度 */
  height: 80px; /* 设置元素的高度 */
  background-image: url("@/assets/images/骷髅玩电脑.png");
  background-size: cover;
}

.first-letter-demo {
  font-size: 16px;
  color: red;
}

.first-letter-demo:first-letter {
  font-size: 32px;
  color: blueviolet;
}

.first-line-demo {
  width: 240px;
  word-break: break-all;
  font-size: 16px;
  color: brown;
}

.first-line-demo:first-line {
  font-size: 32px;
  color: chartreuse;
}

.outline-demo {
  width: 300px;
  height: 45px;
  outline: none; // 鼠标输入是产生的边框
}

/** 设置占位符文本的字体状态 */
.outline-demo::placeholder {
  color: crimson;
  font-size: 16px;
  padding-left: 12px;
}
</style>