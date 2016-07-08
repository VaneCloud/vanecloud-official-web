$(function(){

	var h=$(window).height();

	$('.banner').height(h);

	$('.pic').height(h);

	$('.btn').css('top',(h-$('.btn').height())/2+'px');

	$('.picFoot').css('height',h*0.231+'px');

	$('.pic .container').css('height',h-$('.picFoot').height()-60+'px');

	$('.cloudText').css('height',h*0.141+'px');

	$('.cloudText').css('top',h*0.3+'px');

	$('.cloudpic').css('height',h*0.35+'px');

	$('.cloudpic').css('top',h*0.5-10+'px');

	$('.con3pic').css('height',h*0.546+'px');

	$('.banner .num').css('bottom',h*0.05+'px');

	$('.newsdynamic .container').css('margin',(h-$('.newsdynamic .container').height())/2+30+'px auto 0');

	$('.trees .container').css('margin',(h-$('.trees .container').height())/2+30+'px auto 0');

	$('.industry .container').css('margin',(h-$('.industry .container').height())/2+30+'px auto 0');

	$('.product .container').css('margin',(h-$('.product .container').height())/2+30+'px auto 0');

	$('.experience .container').css('margin',(h-$('.experience .container').height())/2+30+'px auto 0');

	$('.service').css('height',h/2-100+'px');

	$('.ourserver').css('height',h/2-60+'px');

	var sh=$('.service').height();

	var oh=$('.ourserver').height();

	var th=$('.serviceTop').height();

	var bh=$('.serviceBot').height();

	$('.servers').css('margin',(oh-$('.servers').height())/4+'px auto 0');

	$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

	$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');

	$(window).on('scroll resize',function(){

		var h=$(window).height();

		$('.banner').height(h);

		$('.pic').height(h);

		$('.btn').css('top',(h-$('.btn').height())/2+'px');

		$('.picFoot').css('height',h*0.231+'px');

		$('.pic .container').css('height',h-$('.picFoot').height()-60+'px');

		$('.cloudText').css('height',h*0.141+'px');

		$('.cloudText').css('top',h*0.3+'px');

		$('.cloudpic').css('height',h*3.427+'px');

		$('.banner .num').css('bottom',h*0.05+'px');

		$('.newsdynamic .container').css('margin',(h-$('.newsdynamic .container').height())/2+30+'px auto 0');

		$('.trees .container').css('margin',(h-$('.trees .container').height())/2+30+'px auto 0');

		$('.industry .container').css('margin',(h-$('.industry .container').height())/2+30+'px auto 0');

		$('.product .container').css('margin',(h-$('.product .container').height())/2+30+'px auto 0');

		$('.experience .container').css('margin',(h-$('.experience .container').height())/2+30+'px auto 0');

		$('.service').css('height',h/2-100+'px');

		$('.ourserver').css('height',h/2-60+'px');

		var sh=$('.service').height();

		var oh=$('.ourserver').height();

		var th=$('.serviceTop').height();

		var bh=$('.serviceBot').height();

		$('.servers').css('margin',(oh-$('.servers').height())/4+'px auto 0');

		$('.serviceTop').css('margin',(sh-th-bh)/4+'px auto 0');

		$('.serviceBot').css('margin',(sh-th-bh)/4+'px auto 0');

	})

})