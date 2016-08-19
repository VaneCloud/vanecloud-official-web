$(function(){
	$('.row.products li').hover(function(){
		$(this).children('.productsBox1').hide();

		$(this).children('.productsBox2').show();
	},function(){
		$(this).children('.productsBox1').show();
		$(this).children('.productsBox2').hide();
	});

	$('.site-bg-canvas').hover(function(){
		$('.btn.btn_l').show();
		$('.btn.btn_r').show();
	},function(){
		$('.btn.btn_l').hide();
		$('.btn.btn_r').hide();
	});

	$('.banner').hover(function(){
		$('.btn.btn_l').show();
		$('.btn.btn_r').show();
	},function(){
		$('.btn.btn_l').hide();
		$('.btn.btn_r').hide();
	});

	resize();

	$(window).on('scroll resize',function(){
		resize();
		

	})

	function resize(){
		var h=$(window).height();

		$('.banner').height(h);

		$('.pic').height(h);

		$('.btn').css('top',(h-$('.btn').height())/2+'px');

		var ih=$('.picFoot .icon').height();

		$('.picFoot').css('height',ih+5+'px');

		$('.pic .container').css('height',h-$('.picFoot').height()-60+'px');

		$('.container.con4 .con4pic').css('margin',($('.pic .container').height()-350)/2+'px auto 0');

		$('.container.con4 .con4text').css('margin',($('.pic .container').height()-350)/2+40+'px auto 0');

		$('.con3pic').css('margin',($('.pic .container').height()-351)/2+'px auto 0');

		$('.con3text').css('margin',($('.pic .container').height()-351)/2+40+'px auto 0');

		$('.con2pic').css('margin',($('.pic .container').height()-356)/2+'px auto 0');

		$('.con2text').css('margin',($('.pic .container').height()-356)/2+40+'px auto 0');

		$('.cloudText').css('height',h*0.141+'px');

		$('.cloudText').css('top',h*0.3+'px');

		$('.cloudpic').css('height',h*0.35+'px');

		$('.cloudpic').css('top',h*0.5-10+'px');



		var ph=$('.picFoot').height();

		$('.banner .num').css('bottom',ph+5+'px');

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
	}

})