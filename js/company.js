$(function(){
	var wh=$(window).height();

	var bh=$('.businessR').height();

	$('.businessL').css('height',bh+'px');

	$('.business li').hover(function(){
		var _index=$(this).index();

		$(this).addClass('active').siblings('.business li').removeClass('active');

		//$('.businessBox').eq(_index).show().siblings('.businessBox').hide();



	})


	$('.businessNav a').on('mouseover',function(){
		$(this).css({'background':'url("./images/f1.png") no-repeat','background-size':'contain','transform':'rotateY(360deg)','-webkit-transform':'rotateY(360deg)','-o-transform':'rotateY(360deg)','-moz-transform':'rotateY(360deg)'});
		$(this).children('.interior').css('color','#ffffff');
	});

	$('.businessNav a').on('mouseout',function(){
		$(this).css({'background':'url("./images/f2.png") no-repeat','background-size':'contain','transform':'rotateY(0deg)'});
		$(this).children('.interior').css('color','#000000');
	});

	$('.businessNav a').on('click',function(){
		$(this).css({'background':'url("./images/f1.png") no-repeat','background-size':'contain','transform':'rotateY(360deg)'}).siblings('.businessNav a').css({'background':'url("./images/f2.png") no-repeat','background-size':'contain','transform':'rotateY(0deg)','-webkit-transform':'rotateY(0deg)','-moz-transform':'rotateY(0deg)','-o-transform':'rotateY(0deg)'});
		$(this).children('.interior').css('color','#ffffff');
		$(this).siblings('.businessNav a').children('.interior').css('color','#000000');
		$(this).off('mouseout');
	});
	
})