$(function(){
	$('#fullpage').fullpage({
		anchors:['section1','section2','section3','section4','section5','section6','section7'],
		fixedElements:'#header',
		scrollingSpeed:700,
		navigationTooltips:['section1','section2','section3','section4','section5','section6','section7'],
		navigation:true,
		navigationPostion:'right',

		afterRender:function(){

			$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background','#e6e3e3');

			$('#header').hover(function(){
				$(this).css('background','rgba(17,17,17,0.9)')
			},function(){
				$(this).css('background','transparent');
			});

			$('.navHead li>a').hover(function(){
				$(this).addClass('active');
				$(this).siblings('.navSection').show();
			},function(){
				$(this).siblings('.navSection').hide();
				$(this).removeClass('active');
			});

			$('.navSection').hover(function(){
				$(this).siblings('.navHead li a').addClass('active');
				$(this).show();
			},function(){
				$(this).hide();
				$(this).siblings('.navHead li a').removeClass('active');
			});

			$('.navSection ul li>a').hover(function(){
				$(this).addClass('active');
			},function(){
				$(this).removeClass('active');
			})
		},

		onLeave: function(index, nextIndex, direction){
			if(nextIndex==3){
				$('.navHead li>a').addClass('active');
				$('.navSection ul li>a').addClass('active');
				$('.headbar').addClass('active');
				$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background','#326a92');

				$('.navHead li>a').hover(function(){
					$(this).removeClass('active');
				},function(){
					$(this).addClass('active');
				});

				$('.navSection').hover(function(){
					$(this).siblings('.navHead li a').removeClass('active');
				},function(){
					$(this).siblings('.navHead li a').addClass('active');
				});

				$('.navSection ul li>a').hover(function(){
					$(this).removeClass('active');
				},function(){
					$(this).addClass('active');
				})
				tree();
			}else if(nextIndex == 3||nextIndex == 5||nextIndex == 7){
				$('.navHead li>a').addClass('active');
				$('.navSection ul li>a').addClass('active');
				$('.headbar').addClass('active');

				$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background','#326a92');

				$('.navHead li>a').hover(function(){
					$(this).removeClass('active');
				},function(){
					$(this).addClass('active');
				});

				$('.navSection').hover(function(){
					$(this).siblings('.navHead li a').removeClass('active');
				},function(){
					$(this).siblings('.navHead li a').addClass('active');
				});

				$('.navSection ul li>a').hover(function(){
					$(this).removeClass('active');
				},function(){
					$(this).addClass('active');
				})
			}else{
				$('.navHead li>a').hover(function(){
					$(this).addClass('active');
				},function(){
					$(this).removeClass('active');
				});

				$('.navHead li>a').removeClass('active');
				$('.navSection ul li>a').removeClass('active');
				$('.headbar').removeClass('active');

				$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background','#e6e3e3');

				$('.navSection').hover(function(){
					$(this).siblings('.navHead li a').addClass('active');
				},function(){
					$(this).siblings('.navHead li a').removeClass('active');
				});

				$('.navSection ul li>a').hover(function(){
					$(this).addClass('active');
				},function(){
					$(this).removeClass('active');
				})
			}
		},
	});

	function tree(){
		$('.froot').css('animation','0.5s opacity linear 0s forwards');
		$('.froot').css('-webkit-animation','0.5s opacity linear 0s forwards');
		$('.froot').css('-moz-animation','0.5s opacity linear 0s forwards');
		$('.froot').css('-o-animation','0.5s opacity linear 0s forwards');

		$('.ratio').css('animation','0.5s opacity linear 2.4s forwards');
		$('.ratio').css('-webkit-animation','0.5s opacity linear 2.4s forwards');
		$('.ratio').css('-moz-animation','0.5s opacity linear 2.4s forwards');
		$('.ratio').css('-o-animation','0.5s opacity linear 2.4s forwards');
		
		$('.leaf a:nth-child(1)').css('animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)').css('-webkit-animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)').css('-moz-animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)').css('-o-animation','0.1s opacity linear 1.9s forwards');

		$('.leaf a:nth-child(1)>span').css('animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)>span').css('-webkit-animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)>span').css('-moz-animation','0.1s opacity linear 1.9s forwards');
		$('.leaf a:nth-child(1)>span').css('-o-animation','0.1s opacity linear 1.9s forwards');

		$('.leaf a:nth-child(2)').css('animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)').css('-webkit-animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)').css('-moz-animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)').css('-o-animation','0.1s opacity linear 2.2s forwards');

		$('.leaf a:nth-child(2)>span').css('animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)>span').css('-webkit-animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)>span').css('-moz-animation','0.1s opacity linear 2.2s forwards');
		$('.leaf a:nth-child(2)>span').css('-o-animation','0.1s opacity linear 2.2s forwards');
		
		$('.leaf a:nth-child(3)').css('animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)').css('-webkit-animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)').css('-moz-animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)').css('-o-animation','0.1s opacity linear 1.3s forwards');

		$('.leaf a:nth-child(3)>span').css('animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)>span').css('-webkit-animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)>span').css('-moz-animation','0.1s opacity linear 1.3s forwards');
		$('.leaf a:nth-child(3)>span').css('-o-animation','0.1s opacity linear 1.3s forwards');


		$('.leaf a:nth-child(4)').css('animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)').css('-webkit-animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)').css('-moz-animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)').css('-o-animation','0.1s opacity linear 1.6s forwards');

		$('.leaf a:nth-child(4)>span').css('animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)>span').css('-webkit-animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)>span').css('-moz-animation','0.1s opacity linear 1.6s forwards');
		$('.leaf a:nth-child(4)>span').css('-o-animation','0.1s opacity linear 1.6s forwards');

		$('.leaf a:nth-child(5)').css('animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)').css('-webkit-animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)').css('-moz-animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)').css('-o-animation','0.1s opacity linear 0.7s forwards');

		$('.leaf a:nth-child(5)>span').css('animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)>span').css('-webkit-animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)>span').css('-moz-animation','0.1s opacity linear 0.7s forwards');
		$('.leaf a:nth-child(5)>span').css('-o-animation','0.1s opacity linear 0.7s forwards');

		$('.leaf a:nth-child(6)').css('animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)').css('-webkit-animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)').css('-moz-animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)').css('-o-animation','0.1s opacity linear 1s forwards');

		$('.leaf a:nth-child(6)>span').css('animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)>span').css('-webkit-animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)>span').css('-moz-animation','0.1s opacity linear 1s forwards');
		$('.leaf a:nth-child(6)>span').css('-o-animation','0.1s opacity linear 1s forwards');

		$('.bole li:nth-child(1)').css('animation','0.3s move1 linear 1.7s forwards');
		$('.bole li:nth-child(1)').css('-webkit-animation','0.3s move1 linear 1.7s forwards');
		$('.bole li:nth-child(1)').css('-moz-animation','0.3s move1 linear 1.7s forwards');
		$('.bole li:nth-child(1)').css('-o-animation','0.3s move1 linear 1.7s forwards');

		$('.bole li:nth-child(2)').css('animation','0.3s move2 linear 2s forwards');
		$('.bole li:nth-child(2)').css('-webkit-animation','0.3s move2 linear 2s forwards');
		$('.bole li:nth-child(2)').css('-moz-animation','0.3s move2 linear 2s forwards');
		$('.bole li:nth-child(2)').css('-o-animation','0.3s move2 linear 2s forwards');

		$('.bole li:nth-child(3)').css('animation','0.3s move3 linear 1.1s forwards');
		$('.bole li:nth-child(3)').css('-webkit-animation','0.3s move3 linear 1.1s forwards');
		$('.bole li:nth-child(3)').css('-moz-animation','0.3s move3 linear 1.1s forwards');
		$('.bole li:nth-child(3)').css('-o-animation','0.3s move3 linear 1.1s forwards');

		$('.bole li:nth-child(4)').css('animation','0.3s move4 linear 1.4s forwards');
		$('.bole li:nth-child(4)').css('-webkit-animation','0.3s move4 linear 1.4s forwards');
		$('.bole li:nth-child(4)').css('-moz-animation','0.3s move4 linear 1.4s forwards');
		$('.bole li:nth-child(4)').css('-o-animation','0.3s move4 linear 1.4s forwards');

		$('.bole li:nth-child(5)').css('animation','0.3s move5 linear 0.5s forwards');
		$('.bole li:nth-child(5)').css('-webkit-animation','0.3s move5 linear 0.5s forwards');
		$('.bole li:nth-child(5)').css('-moz-animation','0.3s move5 linear 0.5s forwards');
		$('.bole li:nth-child(5)').css('-o-animation','0.3s move5 linear 0.5s forwards');

		$('.bole li:nth-child(6)').css('animation','0.3s move6 linear 0.8s forwards');
		$('.bole li:nth-child(6)').css('-webkit-animation','0.3s move6 linear 0.8s forwards');
		$('.bole li:nth-child(6)').css('-moz-animation','0.3s move6 linear 0.8s forwards');
		$('.bole li:nth-child(6)').css('-o-animation','0.3s move6 linear 0.8s forwards');
	}
})
