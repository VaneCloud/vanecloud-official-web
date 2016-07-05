$(function(){

	$('.namic a').on('mouseover',function(){
		$(this).css({'background':'url("./images/f1.png") no-repeat','background-size':'contain','transform':'rotateY(360deg)','-webkit-transform':'rotateY(360deg)','-o-transform':'rotateY(360deg)','-moz-transform':'rotateY(360deg)'});
		$(this).children('.interior').css('color','#ffffff');
	});

	$('.namic a').on('mouseout',function(){
		$(this).css({'background':'url("./images/f2.png") no-repeat','background-size':'contain','transform':'rotateY(0deg)'});
		$(this).children('.interior').css('color','#000000');
	});

	$('.namic a').on('click',function(){
		$(this).css({'background':'url("./images/f1.png") no-repeat','background-size':'contain','transform':'rotateY(360deg)'}).siblings('.namic a').css({'background':'url("./images/f2.png") no-repeat','background-size':'contain','transform':'rotateY(0deg)','-webkit-transform':'rotateY(0deg)','-moz-transform':'rotateY(0deg)','-o-transform':'rotateY(0deg)'});
		$(this).children('.interior').css('color','#ffffff');
		$(this).siblings('.namic a').children('.interior').css('color','#000000');
		$(this).off('mouseout');
	});

	$('.newSbody li:last-child').append('<div class="shape3"></div>');
})


