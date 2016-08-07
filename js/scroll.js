$(function(){

    var wi=$('.indust li').eq(0).outerWidth();

    var cli=$(".indust li").first().clone();

    $(".indust").append(cli);

    var l=0;

    var si=$(".indust li").size();

    $(".indust li").click(function(){
        var _index=$('.indust li').index();
        l=_index;
    })

    $('.btnnl').click(function(){
        l++;
        movelr();
    })

    $('.btnnr').click(function(){
        l--;
        movelr();
    })

    function movelr(){
        if(l==si-2){
            $(".indust").css({left:0})
            l=1;
        }

        if(l==-1){
            $(".indust").css({left:-(si-1)*wi})
            l=si-4;
        }

        $(".indust").stop().animate({left:-(l*wi)},500);

    }

    /*var ll=$(".indust li").length;

    $('.indust').css('width',wi*ll+'px');*/


	/*$('.indust').html($('.indust').html()+$('.indust').html());
    var s=$('.indust>li').eq(0).outerWidth();


	$('.btnnl').click(function(){
    	if($('.indd').scrollLeft()>$('.indust').width()/2){

            $('.indd').scrollLeft(0);
        }else{

            $('.indd').scrollLeft($('.indd').scrollLeft()+s)
        }
    })

    $('.btnnr').click(function(){
        if($('.indd').scrollLeft()<$('.indust').width()/2){

            $('.indd').scrollLeft($('.indust').width()/2);
        }else{

            $('.indd').scrollLeft($('.indd').scrollLeft()-s)
        }
    })*/

	/*var scroll = function(){
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
    )*/
})