$(function(){
	$('.navHead1 li').hover(function(){
		$(this).children('a').addClass('active1');
					$(this).children('.navSection').show();
				},function(){
					$(this).children('a').removeClass('active1');
					$(this).children('.navSection').hide();
				});

				$('.navHead2 li').hover(function(){
					$(this).children('a').addClass('active2');
					$(this).children('.navSection').show();
				},function(){
					$(this).children('a').removeClass('active2');
					$(this).children('.navSection').hide();
				});

				$('.navHead3 li').hover(function(){
					$(this).children('a').addClass('active3');
					$(this).children('.navSection').show();
				},function(){
					$(this).children('a').removeClass('active3');
					$(this).children('.navSection').hide();
				});

				$('.navHead4 li').hover(function(){
					$(this).children('a').addClass('active4');
					$(this).children('.navSection').show();
				},function(){
					$(this).children('a').removeClass('active4');
					$(this).children('.navSection').hide();
				});
})