$(function(){
    var selector = $(".my_sector");//获取导航对象
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();//获取当前滚动条距离窗口上面的距离
        if(scrollTop>500){
            selector.addClass("fixed_nav");
        }else{
            selector.removeClass("fixed_nav")
        }
    })
})