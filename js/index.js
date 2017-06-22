/**
 * Created by px on 2017/6/20.
 * 功能：登录页面
 */
// 设置登录框默认隐藏
$("main .login").css("display","none");
// 点击头像，显示登录框
$(".portrait").click(function () {
    // $(this).animate({transform:"rotate(360deg)"},"slow");
    $("main .login").css("display","block");
})

// 登录状态提醒
$("span.btn").click(function () {
    let psw = $(".login > input").val();
    let alt = $(".login-box > p");
    if(psw === "") {
       alt.text("请输入密码！");
    }
    else if(psw === "123") {
        location.href = "pages/window.html";
    }else {
        alt.text("密码错误，请重新输入！");
    }
})