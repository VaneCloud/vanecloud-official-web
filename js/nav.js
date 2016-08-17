$(function(){
	$('.header').hover(function(){
		$(this).css('background','rgba(17,17,17,0.9)')
	},function(){
		$(this).css('background','transparent');
	})


	$('.navHead li>a').hover(function(){
		$(this).addClass('active');
		$(this).siblings('.navSection').show();
	},function(){
		$(this).removeClass('active');
		$(this).siblings('.navSection').hide();
	})

	$('.navSection').hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})

	$('.navSection ul li>a').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})

})