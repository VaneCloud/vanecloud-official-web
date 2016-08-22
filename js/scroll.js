$(function(){
    var oDiv=document.getElementById('indust');

    $('.indust').html($('.indust').html()+$('.indust').html());



    $('.btnnl').click(function(){

        $('.indust').animate({left:'-=330px'});

        if(oDiv.offsetLeft<=-1320){
            $('.indust').animate({left:'0'});
        }

    })

    $('.btnnr').click(function(){

        $('.indust').animate({left:'+=330px'});

        if(oDiv.offsetLeft>=-330){
            $('.indust').animate({left:'-1650px'});
        }

    })

})