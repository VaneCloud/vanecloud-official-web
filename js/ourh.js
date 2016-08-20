$(function(){

	var wh=document.body.clientHeight;

	$('.service').height(wh/2-100);

	var sh=$('.service').height();

	var th=$('.serviceTop').height();

	var bh=$('.serviceBot').height();

	$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

	$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');


	$(window).on('scroll resize',function(){
		
		var wh=document.body.clientHeight;

		$('.service').height(wh/2-100);

		var sh=$('.service').height();

		var th=$('.serviceTop').height();

		var bh=$('.serviceBot').height();

		$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

		$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');

	})

})