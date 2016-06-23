$(function(){
	var i=0;
	var clone=$(".picture .pic").first().clone();
	$(".picture").append(clone);

	var size=$(".picture .pic").size();
	for(var i=0;i<size-1;i++){
		$(".num").append("<li></li>");
	}

	$(".banner .num li").first().addClass("active");

	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".picture").stop().animate({left:-index*1920},500)	
		$(this).addClass("active").siblings().removeClass("active");	
	})

	var t=setInterval(function(){
		i++;
		move()
	},5000)

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},5000)
	})

	$(".btn.btn_l").click(function(){
		i++;
		move();	
	})
	
	
	$(".btn.btn_r").click(function(){
		i--;
		move()				
	})

	function move(){
		
		if(i==size){
			$(".picture").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".picture").css({left:-(size-1)*1920})
			i=size-2;
		}
		
		$(".picture").stop().animate({left:-i*1920},500)	
		
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("active").siblings().removeClass("active")	
		}else{		
			$(".banner .num li").eq(i).addClass("active").siblings().removeClass("active")	
		}
		
	}
})