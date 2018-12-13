$(function(){
    /*导航列表下拉菜单*/
    var $li =$(".my_position");
    $li.on("mouseover",function(){
        $(this).children().last().show()

    })
        .on("mouseout",function(){
            $(this).children().last().hide()
        });
    var $small_ul=$("ul.my_detail_hide");
    $small_ul.mouseenter(function(){
        $(this).parent().children(":first").css("color","#000")
    });
    /*导航列表大图片special定时闪出*/
    $my_banner1=$(".my_banner1");
    var $banner1_p=$my_banner1.children().find("p");
    function task(){
        $banner1_p.toggleClass("show")
    }
    var timer=setInterval(task,1000);
    clearInterval(timer)
})