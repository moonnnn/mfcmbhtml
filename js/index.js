$(function(){
     
    // 导航栏
	$(".zhankai").click(function(){
        $(".nav-xia").toggle();
    });
	
	// 轮播图
	var $key=0;
	var $circle=0;
	var speed=500;

    $(".banner ol li").mouseover(function() {
    var $key=$(this).index(); 
    var $circle=$(this).index();
    $(".banner ol li").eq($circle).addClass('current').siblings().removeClass('current');  
    $(".banner ul").stop().animate({"left":-$key*100+'%'}, speed);
    });

	var timer=setInterval(autoplay,1500);
	function autoplay(){
		$key++;
		if($key>3){
			$key=1;
			$(".banner ul").css("left",0);
		}
		$(".banner ul").stop().animate({"left":-$key*100+'%'},
		 speed);
		
		$circle++;
		if($circle>2){
			$circle=0;
		}
		$(".banner ol li").eq($circle).addClass('current').siblings().removeClass('current');
	}

	$(".banner").hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay,1500);
	});

});

