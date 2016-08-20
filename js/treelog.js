$(function(){
	$(window).on('scroll resize',function(){
		if($(window).scrollTop()>$(document).height()/2.5){
			$('.logpicT').css('animation','1s logrotatet linear 0s forwards');
			$('.logpicB').css('animation','1s logrotateb linear 0s forwards');
			$('.logpic').css('animation','1s logpic linear 0s forwards');

			$('.monitPic .pic > li:nth-child(1)').css('animation','1s monit1 linear 0s forwards');
			$('.monitPic .pic > li:nth-child(2)').css('animation','1s monit2 linear 0s forwards');

		}else{
			$('.logpicT').css('animation','1s logrotateT linear 0s forwards');
			$('.logpicB').css('animation','1s logrotateB linear 0s forwards');
			$('.logpic').css('animation','1s logpicc linear 0s forwards');

			$('.monitPic .pic > li:nth-child(1)').css('animation','1s monit11 linear 0s forwards');
			$('.monitPic .pic > li:nth-child(2)').css('animation','1s monit22 linear 0s forwards');
		}

		
	})
})