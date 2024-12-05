<!-- CSS 高级选择器 -->
<template>
    <div class = "page">
        <div class = "page-demo">
            <a>选择所有元素</a>
        </div>
        <!-- 后代选择器 -->
        <div class = "page-demo page-demo01">
            <label>后代选择器</label>
            <span>后代选择器</span>
            <a>后代选择器</a>
        </div>

        <!-- 群选择器 -->
        <div class = "page-demo page-demo3">
            <label>群选择器 label</label>
            <span>群选择器 span</span>
            <a>群选择器 a</a>
            <div>
                <label>群选择器 div > label </label>
                <span>群选择器 div > span </span>
                <a>群选择器 div > a </a>
            </div>
        </div>

        <!-- + 选择器: 选择紧跟在某元素之后某的元素 -->
        <div class = "page-demo page-demo04">
            <div class = "page-demo-plus">label1 + 选择器</div>
            <div>label2 + 选择器</div>
            <div class = "page-demo-plus">label3 + 选择器</div>
            <div>label4 + 选择器</div>
            <div>label5 + 选择器</div>
        </div>

        <!-- ~ 选择器: 选择在某元素之后的所有元素 -->
        <div class = "page-demo page-demo05">
            <div>label1 ~ 选择器</div>
            <div>label2 ~ 选择器</div>
            <div class = "page-demo-tilde">label3 ~ 选择器</div>
            <div>label4 ~ 选择器</div>
            <div>label5 ~ 选择器</div>
        </div>

        <!-- 【】属性选择器 -->
        <div class = "page-demo page-demo06">
            <input type = "text" name = "DEMO"/>
            <input type = "text"/>
            <input type = "text" name = "DEMO"/>
            <input type = "text"/>
            <input type = "number" name = "DEMO"/>
            <input type = "number"/>
            <input type = "number" name = "DEMO"/>
            <input type = "number"/>
            <input type = "checkbox"/>
        </div>

        <!-- ^属性选择器： 以固定字符开头的 -->
        <div class = "page-demo page-demo07">
            <input type = "text" name = "DEMO01"/>
            <input type = "text" name = "SEMO02"/>
            <input type = "number" name = "DEMO03"/>
            <input type = "number" name = "XEMO04"/>
        </div>

        <!-- ^属性选择器： 以固定字符结尾的 -->
        <div class = "page-demo page-demo08">
            <input type = "text" name = "TOM_DEMO"/>
            <input type = "text" name = "TEM"/>
            <input type = "number" name = "TIVID_DEMO"/>
            <input type = "number" name = "JOM_DEM"/>
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
  overflow-y: auto;
}

.page-demo {
  margin: 10px;
  padding: 10px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}


/** 选择所有元素 */
* {
  font-size: 18px;
  color: #000000;
}

/** 后代选择器 */
.page-demo01 span {
  font-size: 14px;
  color: crimson;
}

.page-demo01 label {
  color: chartreuse;
}

/** 群选择器 子选择器 */
.page-demo3 > label, .page-demo3 > span, .page-demo3 > a {
  color: crimson;
  font-size: 24px;
}

.page-demo04 {
  color: crimson;

  .page-demo-plus + div {
    color: chartreuse;
    font-size: 24px;
  }
}

.page-demo05 {
  color: blue;

  .page-demo-tilde ~ div {
    color: chartreuse;
    font-size: 24px;
  }
}

.page-demo06 > input {
  margin: 5px 0;
  color: white;
}

.page-demo06 > input[type='text'] {
  background-color: chartreuse;
}


.page-demo06 > input[type='text'][name='DEMO'] {
  background-color: aqua;
}

.page-demo06 > input[type='number'] {
  background-color: blueviolet;
}

.page-demo06 > input[type='number'][name='DEMO'] {
  background-color: cadetblue;
}

.page-demo07 > input {
  margin: 5px 0;
  color: white;
}

.page-demo07 > input[name ^= 'DEMO'] {
  background-color: cadetblue;
}

.page-demo08 > input {
  margin: 5px 0;
  color: white;
}

.page-demo08 > input[name $= 'DEMO'] {
  background-color: cadetblue;
}


</style>