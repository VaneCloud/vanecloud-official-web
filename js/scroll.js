$(function(){

	$('.indust').html($('.indust').html()+$('.indust').html());

	var s=$('.indust>li').eq(0).outerWidth();
	
	
	$('.btnnl').on('click',function(){
    	if($('.indd').scrollLeft()>$('.indust').width()/2){
              
            $('.indd').scrollLeft(0);
        }else{
                
            $('.indd').scrollLeft($('.indd').scrollLeft()+s)  
        } 
    })

    $('.btnnr').on('click',function(){
    	if($('.indd').scrollLeft()>$('.indust').width()/2){
              
            $('.indd').scrollLeft(0);
        }else{
                
            $('.indd').scrollLeft($('.indd').scrollLeft()-s)  
        }
    })

	var scroll = function(){
        if($('.indd').scrollLeft()>$('.indust').width()/2){
              
            $('.indd').scrollLeft(0);
        }else{
                
            $('.indd').scrollLeft($('.indd').scrollLeft()+10)  
        }
    }
	
	

    var tervual = setInterval(scroll,100);
        
    $('.industr').hover(
        function () {
            clearInterval(tervual);
        }, function () {
            tervual = setInterval(scroll,100)
        }
    )
})