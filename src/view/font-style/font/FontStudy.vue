<template>
    <div class = "demo-page">
        <div class = "demo-block">
            <p class = "font-style-1">个应用被用户卸载肯定是有理由的，而开发者却未必能得知这一 -重要的理中，
                毕竟用户很少会主动反馈建议，多半就是用得不爽就卸，如果能在被卸载后获取到用户的一些反馈 那对开发者进一步改进应用是非常有利的。
                目前据我所知，国内的Android应用中实现这一功能的只有360手机卫士、 360平板卫士，那么如何实现这一功能的?</p>
        </div>
        <!------------------------------>
        <div class = "demo-block">
            <p class = "font-style-2">个应用被用户卸载肯定是有理由的，而开发者却未必能得知这一 -重要的理中，
                毕竟用户很少会主动反馈建议，多半就是用得不爽就卸，如果能在被卸载后获取到用户的一些反馈 那对开发者进一步改进应用是非常有利的。
                目前据我所知，国内的Android应用中实现这一功能的只有360手机卫士、 360平板卫士，那么如何实现这一功能的?</p>
        </div>
    </div>

</template>


<style scoped lang = "scss">
.demo-page {
  margin-left: 10vw;
  width: 80vw;
  height: 100vh;

  .demo-block {
    padding: 1vw;
    margin-top: 1vh;
    border-bottom: 0.1vh solid red;
  }

  & p {
    margin: 0;
    padding: 0;
    color: black;
  }
}

/*字体综合写法：加粗 斜体 字体/行高 字体 （不能修改位置）*/
.font-style-1 {
  font:bold italic 18px/28px "宋体";
}

/**
 * 水平对齐：text-align
 * 文本修饰：text-decoration
 * 缩进：text-indent
 *
 */
.font-style-2 {
  font: 14px/28px "新宋体";

  text-align: left;
  text-decoration: underline;
  text-indent: 1.5vw;

}
</style>