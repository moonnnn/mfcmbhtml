$(function() {
    $(".ling-nav>ul>li").hover(function() {
       $(".zhanzhan>ul>li").eq($(this).index()).stop().show().siblings().stop().hide();
    });

    $(".ling-nav>ul>li").hover(function() { 
       $(this).children('a').css({"border-left":"4px solid #ff9d00","color":"#ff9d00"});
    },function() { 
       $(this).children('a').css({"border-left":"0px solid #ff9d00","color":"#111111"});
    });
});