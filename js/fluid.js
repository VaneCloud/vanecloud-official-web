$(function(){
	$('.accordion li').hover(function(){

		$(this).stop(true,false).animate({'width':'620px'},500).siblings('.accordion li').stop(true,false).animate({'width':'140px'},500);

	})
})