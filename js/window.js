/**
 * Created by px on 2017/6/20.
 * 功能：桌面
 */
/********************************
 *****页面加载完统一执行函数*******
 * *******************************/


/********************************
 *************函数调用********
 *********************************/





// 动态获取当前时间并显示
var current = $("footer > .time");
setInterval("current.text(time())",1000);
// 禁用鼠标右键函数
document.oncontextmenu = function () {
    return false;
}

/********************************
 *****函数功能定义*******
 * *******************************/
// 定义时间函数
function time() {
    let date = new Date();
    var seperator1 = "/";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var time = date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds() + " " + date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return time;
}

// 桌面鼠标右键事件
$("main.desktop").mousedown(function (e) {
    // 右键菜单在点击鼠标左键和中键时隐藏
    let rightMenu = $("main > .right-menu");
    // 每次鼠标点击事件进入前菜单栏都隐藏，防止第二次点击右键fadeIn()的效果无法实现
    rightMenu.hide();
    // 定义变量存储桌面宽度和高度
    let dskWidth = $(this).width();
    let dskHeight = $(this).height();
    // 右击事件时，菜单显示
    if(e.which === 3) {
        // 如果鼠标在屏幕右下角点击，到右边的距离 < 菜单栏的宽度 && 到底边的距离 < 菜单栏的高度
        if(dskWidth - e.pageX < 220 && dskHeight - e.pageY < 300) {
            // 则菜单栏上移300px，左移220px
            rightMenu.css({
                "top": (e.pageY - 300) + "px",
                "left": (e.pageX - 220) + "px"
            }).fadeIn(600);
        }
        // 如果鼠标在屏幕右边点击的位置，到右边的距离 < 菜单栏的宽度
        else if(dskWidth - e.pageX < 220){
            // 则菜单栏左移220px
            rightMenu.css({
                "top": e.pageY + "px",
                "left": (e.pageX - 220) + "px"
            }).fadeIn(600);
        }
        // 如果鼠标在屏幕下面点击的位置，到底边的距离 < 菜单栏的高度
         else if(dskHeight - e.pageY < 300) {
            // 则菜单栏上移300px
            rightMenu.css({
                "top": (e.pageY - 300) + "px",
                "left": e.pageX + "px"
            }).fadeIn(600);
        }
        // 正常情况下，菜单栏出现在鼠标点击的位置
        else {
            rightMenu.css({
                "top": e.pageY + "px",
                "left": e.pageX + "px"
            }).fadeIn(600);
        }
    }

    // 定义变量接收桌面应用图标
    let app = $(".apps > a");
    let icon = $(".apps > a > img");
    // 点击图标大小变化事件
    // 大图标
    $("li.big").off("mousedown").mousedown(function () {
         app.css({"width":"70px","height":"70px"});
         icon.css({"width":"60px","height":"60px"});
    });
    // 中图标
    $("li.middle").off("mousedown").mousedown(function () {
        app.css({"width":"60px","height":"60px"});
        icon.css({"width":"50px","height":"50px"});
    });
    // 小图标
    $("li.small").off("mousedown").mousedown(function () {
        app.css({"width":"50px","height":"50px"});
        icon.css({"width":"40px","height":"40px"});
    });

    // 背景图更换
    $("li.changeBg").off("mousedown").mousedown(function(e){
        e.stopPropagation();
        $(".bgFile").click();
        rightMenu.hide();
    });

    $("input.bgFile").off("change").change(function(e){
        e.stopPropagation();
        var fileUrl = $(this).val().slice($(this).val().lastIndexOf("\\")+1);
        localStorage.setItem("bg",fileUrl);
        setBg();
    });
})

// 设置背景图片更换函数
function setBg() {
    var fileUrl = localStorage.getItem("bg");
    $(".desktop").css("background-image","url(../img/bg/"+fileUrl+"");
}