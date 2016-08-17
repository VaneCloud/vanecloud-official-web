$(function(){
	var w=$(window).width();

	$('.pic').width(w);
	
	$('.picture').width(w*5);

	var i=0;

	var clone=$(".picture .pic").first().clone();
	
	$(".picture").append(clone);

	var size=$(".picture .pic").size();
	
	for(var j=0;j<size-1;j++){
		$(".num").append("<li></li>");
	}

	$(".banner .num li").first().addClass("active");

	$(".banner .num li").click(function(){
		var index=$(this).index();
		i=index;
		$(".picture").stop().animate({left:-index*w},500);	
		$(this).addClass("active").siblings().removeClass("active");	
		
	})


	move();
	/*var t=setInterval(function(){
		i++;
		move()
	},3000)

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		clearInterval(t);
		t=setInterval(function(){
			i++;
			move()
		},3000)
	})*/

	$(".btn.btn_l").click(function(){
		i++;
		move();	
	})
	
	
	$(".btn.btn_r").click(function(){
		i--;
		move();
	})

	function move(){
		
		if(i==size){
			$(".picture").css({left:0})			
			i=1;
		}
		
		if(i==-1){
			$(".picture").css({left:-(size-1)*w})
			i=size-2;
		}
		
		$(".picture").stop().animate({left:-i*w},500)	
		
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("active").siblings().removeClass("active");

		}else{		
			$(".banner .num li").eq(i).addClass("active").siblings().removeClass("active");

		}
		
	}

	$(window).on('resize scroll',function(){
		var w=$(window).width()+20;
		var h=$(window).height();
		$('.banner').height(h);
		$('.pic').width(w);
		$('.pic').height(h);
		$('.picture').width(w*5);


		var i=0;
		

		$(".banner .num li").click(function(){
			var index=$(this).index();
			i=index;
			$(".picture").stop().animate({left:-index*w},500);	
			$(this).addClass("active").siblings().removeClass("active");	
			
		})



		
		$(".btn.btn_l").click(function(){
			i++;
			move();	
		})
		
		
		$(".btn.btn_r").click(function(){
			i--;
			move();
		})

		function move(){
			
			if(i==size){
				$(".picture").css({left:0})			
				i=1;
			}
			
			
			if(i==-1){
				$(".picture").css({left:-(size-1)*w})
				i=size-2;
			}
			
			$(".picture").stop().animate({left:-i*w},500);
			
			if(i==size-1){
				$(".banner .num li").eq(0).addClass("active").siblings().removeClass("active");

			}else{		
				$(".banner .num li").eq(i).addClass("active").siblings().removeClass("active");

			}
			
		}
	})
})