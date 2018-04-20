$(function() {
    $(".anniu ul li").hover(function() {
       $(this).stop().addClass('current').siblings().stop().removeClass('current');
    });
    $(".current-er").hover(function() {
       $(".section-yi").hide();
       $(".section-er").show();
    });
    $(".current").hover(function() {
       $(".section-er").hide();
       $(".section-yi").show();
    });
});