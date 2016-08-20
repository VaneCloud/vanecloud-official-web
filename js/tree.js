$(function(){
	var hh=$('.header').height()+$('.banner').height()+$('.newsdynamic').height()+$('.wisdomtree').height()-$('.trees').height();

	$(window).on('scroll',function(){
		
		if($(window).scrollTop()>hh){

			$('.foot').css('animation','0.5s opacity linear 0s forwards');
			$('.foot').css('-webkit-animation','0.5s opacity linear 0s forwards');
			$('.foot').css('-moz-animation','0.5s opacity linear 0s forwards');
			$('.foot').css('-o-animation','0.5s opacity linear 0s forwards');

			$('.leaf li:nth-child(1)').css('animation','0.1s opacity linear 1.9s forwards');
			$('.leaf li:nth-child(1)').css('-webkit-animation','0.1s opacity linear 1.9s forwards');
			$('.leaf li:nth-child(1)').css('-moz-animation','0.1s opacity linear 1.9s forwards');
			$('.leaf li:nth-child(1)').css('-o-animation','0.1s opacity linear 1.9s forwards');

			$('.leaf li:nth-child(2)').css('animation','0.1s opacity linear 2.2s forwards');
			$('.leaf li:nth-child(2)').css('-webkit-animation','0.1s opacity linear 2.2s forwards');
			$('.leaf li:nth-child(2)').css('-moz-animation','0.1s opacity linear 2.2s forwards');
			$('.leaf li:nth-child(2)').css('-o-animation','0.1s opacity linear 2.2s forwards');

			$('.leaf li:nth-child(3)').css('animation','0.1s opacity linear 1.3s forwards');
			$('.leaf li:nth-child(3)').css('-webkit-animation','0.1s opacity linear 1.3s forwards');
			$('.leaf li:nth-child(3)').css('-moz-animation','0.1s opacity linear 1.3s forwards');
			$('.leaf li:nth-child(3)').css('-o-animation','0.1s opacity linear 1.3s forwards');

			$('.leaf li:nth-child(4)').css('animation','0.1s opacity linear 1.6s forwards');
			$('.leaf li:nth-child(4)').css('-webkit-animation','0.1s opacity linear 1.6s forwards');
			$('.leaf li:nth-child(4)').css('-moz-animation','0.1s opacity linear 1.6s forwards');
			$('.leaf li:nth-child(4)').css('-o-animation','0.1s opacity linear 1.6s forwards');

			$('.leaf li:nth-child(5)').css('animation','0.1s opacity linear 0.7s forwards');
			$('.leaf li:nth-child(5)').css('-webkit-animation','0.1s opacity linear 0.7s forwards');
			$('.leaf li:nth-child(5)').css('-moz-animation','0.1s opacity linear 0.7s forwards');
			$('.leaf li:nth-child(5)').css('-o-animation','0.1s opacity linear 0.7s forwards');

			$('.leaf li:nth-child(6)').css('animation','0.1s opacity linear 1s forwards');
			$('.leaf li:nth-child(6)').css('-webkit-animation','0.1s opacity linear 1s forwards');
			$('.leaf li:nth-child(6)').css('-moz-animation','0.1s opacity linear 1s forwards');
			$('.leaf li:nth-child(6)').css('-o-animation','0.1s opacity linear 1s forwards');

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

	
})