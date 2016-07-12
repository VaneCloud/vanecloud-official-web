$(function(){

	var wh=$(window).height();

	var hh=$('.header').height();

	var fh=$('.footer').height();

	$('.Login').height(wh-hh-fh);

	var lh=$('.Login').height();

	var rh=$('.registryBox').height();

	var rh2=$('.loginBox').height();

	var fh=$('.finishBox').height();

	var th=$('.serviceTop').height();

	var bh=$('.serviceBot').height();

	$('.registryBox').css('margin',(lh-rh)/2+'px auto 0');

	$('.loginBox').css('margin',(lh-rh2)/2+'px auto 0');

	$('.finishBox').css('margin',(lh-fh)/2+'px auto 0');

	$('.service').css('height',wh/2-100+'px');

	var sh=$('.service').height();

	$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

	$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');

	$(window).on('scroll resize',function(){

		var wh=$(window).height();

		var hh=$('.header').height();

		var fh=$('.footer').height();

		$('.Login').height(wh-hh-fh);

		var lh=$('.Login').height();

		var rh=$('.registryBox').height();

		var rh2=$('.loginBox').height();

		var fh=$('.finishBox').height();

		var th=$('.serviceTop').height();

		var bh=$('.serviceBot').height();

		$('.registryBox').css('margin',(lh-rh)/2+'px auto 0');

		$('.loginBox').css('margin',(lh-rh2)/2+'px auto 0');

		$('.finishBox').css('margin',(lh-fh)/2+'px auto 0');

		$('.service').css('height',wh/2-100+'px');

		var sh=$('.service').height();

		$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

		$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');

	})
})