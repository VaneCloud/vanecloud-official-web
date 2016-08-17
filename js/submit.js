/**
 * Created by admin on 2016/8/17.
 */

$(function(){

    $('input.submit').on('click',function(){
        sendMail();
        return false;
    })

   function sendMail(){
       var link = "http://www.zhukai@vanecloud.com";
       window.location.href = link;
   }


})