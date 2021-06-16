# 課程:網頁設計 -- 期末作業
欄位 | 內容
-----|--------
學期 | 109 學年度下學期
學生| 林庭光
學號末兩碼| 06

##homework 塗鴉牆
#來源
本程式修改自 課程範例 09sketchpad,網址如下:
來源 -- [用100行實現HTML5可存檔塗鴉版](https://blog.darkthread.net/blog/html5-canvas-sktechpad/)

#功能
###包含
1.首頁
2.資訊
3.作業-----塗鴉牆
4.筆記
5.參考連結

#技術手段
###1. 產生不同顏色的div方格當作調色盤選項,可增加顏色

```
$(function () {
        var colors =
        "red;orange;yellow;cyan;Turquoise;green;blue;indigo;purple;black;white".split(';');
        var sb = [];
        $.each(colors, function (i, v) {
            sb.push("<div class='option' style='background-color:" + v + "'></div>");
        });
```
###2.產生不同尺寸的方格當作線條粗細選項,可更改迴圈,增加租細選項
```
    $("#dPallete").html(sb.join(""));
        sb = [];
        for (var i = 1; i <= 20; i++)
            sb.push("<div class='option lw'>" +
         "<div style='margin-top:#px;margin-left:#px;width:%px;height:%px'></div></div>"
                .replace(/%/g, i).replace(/#/g, 21));
            $("#dLine").html(sb.join('\n'));
            var $clrs = $("#dPallete .option");
            var $lws = $("#dLine .option");
```
###3.變更粗細,將顏色存於p_collor

```
        var $lws = $("#dLine .option");
            $clrs.click(function () {
            $clrs.removeClass("active");
            $(this).addClass("active");
            p_color = this.style.backgroundColor;
            $lws.children("div").css("background-color", p_color);
            }).first().click();
```
###4.切換粗細焦點,存寬度於p_width
```
        $lws.click(function () {
            $lws.removeClass("active");
            $(this).addClass("active");
            p_width =
                $(this).children("div").css("width").replace("px", "");
        }).eq(3).click();
```
###5.canvas context,canvas塗上白色背景避免PNG的透明底色效果
```
        var $canvas = $("#cSketchPad");
            var ctx = $canvas[0].getContext("2d");
            ctx.lineCap = "round";
            ctx.fillStyle = "white"; 
            ctx.fillRect(0, 0, $canvas.width(), $canvas.height());
            var drawMode = false;
```
###6.滑鼠的移動事件
```
        $canvas.mousedown(function (e) {
            ctx.beginPath();
            ctx.strokeStyle = p_color;
            ctx.lineWidth = p_width;
            ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
            drawMode = true;
        })
            .mousemove(function (e) {
                if (drawMode) {
                    ctx.lineTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
                    ctx.stroke();
                }
            })
            .mouseup(function (e) {
                drawMode = false;

            $("#bGenImage").click(function () {
                $("#dOutput").html(
                $("<img />", { src: $canvas[0].toDataURL(),
                    "class": "output"
                }));
            });
```

