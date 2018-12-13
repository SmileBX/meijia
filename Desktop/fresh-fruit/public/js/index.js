$(function(){
    var $my_menu =$(".my_menu");
    $my_menu.on("mouseover",function(){
        $(this).children().last().show()
    })
        .on("mouseout",function(){
            $(this).children().last().hide()
        });

    function task(){
        var img=document.querySelector("#banner>li>img.show");
        img.className="";
        var next=img.parentNode.nextElementSibling;
        if(next!=null)
            next.children[0].className="show";
        else
            img.parentNode.parentNode.children[0].children[0].className="show"
    }
    var timer=setInterval(task,2000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
        clearInterval(timer)
    };
    banner.onmouseout=function(){
        timer=setInterval(task,2000)
    };
/*文字动画 效果shop now*/
   var $my_logo=$("#my_logo")
   $my_logo.mouseenter(
       function(){
        $(this).children().first().addClass("rotateInUpLeft")
        .removeClass("rotateOutDownLeft")
        .parent().css("background","red")
        .children().last().css("opacity","0.2")
        })
    $my_logo.mouseleave(function(){
        $(this).children().first().addClass("rotateOutDownLeft")
        .removeClass("rotateInUpLeft")
        .parent().css("background","#84c639")   
    })
})