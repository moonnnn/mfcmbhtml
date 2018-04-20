$(function(){

    var $key=0;
    var $circle=0;
    var speed=500;

    $(".d-banner ol li").mouseover(function() {
    var $key=$(this).index(); 
    var $circle=$(this).index();
    $(".d-banner ol li").eq($circle).addClass('current').siblings().removeClass('current');  
    $(".d-banner ul").stop().animate({"left":-$key*100+'%'}, speed);
    });

    var timer=setInterval(autoplay,1500);
    function autoplay(){
        $key++;
        if($key>9){
            $key=1;
            $(".d-banner ul").css("left",0);
        }
        $(".d-banner ul").stop().animate({"left":-$key*100+'%'},
         speed);
        
        $circle++;
        if($circle>8){
            $circle=0;
        }
        $(".d-banner ol li").eq($circle).addClass('current').siblings().removeClass('current');
    }

    $(".d-banner").hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer=setInterval(autoplay,1500);
    });

});