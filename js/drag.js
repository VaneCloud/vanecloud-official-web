$(function(){
	drag($('.joint'));

	function drag(obj){
		var disX = 0;
		var disY = 0;

		obj.mousedown(function(ev){
						
			disX = ev.pageX - $(this).offset().left;
			disY = ev.pageY - $(this).offset().top;
						
			$(document).mousemove(function(ev){
				var L = ev.pageX - disX - $(window).scrollLeft();
				var T = ev.pageY - disY - $(window).scrollTop();

				if ( L < 0 ) {
					L = 0;
				} else if (L > $(window).width()- obj.outerWidth()) {
					L = $(window).width()-obj.outerWidth();
				}
							
				if ( T < 0 ) {
					T = 0;
				} else if ( T > $(window).height() - obj.outerHeight()) {
					T = $(window).height() - obj.outerHeight();
				}

				obj.css('left',L);
				obj.css('top',T);
						
			});
						
			$(document).mouseup(function(){
							
				$(document).off();
							
			});
						
			return false;
						
		});
	}
})