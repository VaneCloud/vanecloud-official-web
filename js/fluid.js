$(function(){
	$('.accordion li').hover(function(){

		$(this).stop(true,false).animate({'width':'660px'},500).siblings('.accordion li').stop(true,false).animate({'width':'180px'},500);

	})
})