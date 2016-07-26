$(function(){
	$('.search>input[type="search"]').focus(function(){
		$(this).parent('.search').siblings('.navHead').hide();
		$(this).parent('.search').siblings('.logInOut').hide();
		$(this).css('width','800px');
	})

	$('.search>input[type="search"]').blur(function(){
		$(this).parent('.search').siblings('.navHead').show();
		$(this).parent('.search').siblings('.logInOut').show();
		$(this).css('width','150px');
	})


	$('.logInOut.pull-left>li').hover(function(){
		$(this).children('a').addClass('active');
		$(this).siblings('.logInOut.pull-left>li').children('a').removeClass('active');
	});

})