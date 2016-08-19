/**
 * Created by admin on 2016/8/17.
 */

$(function() {
    $('input.submit').on('click', function () {
        sendMail();
        return false;
    })

    function sendMail() {

        var username=$('#myText').val();

        var job=$('#job').val();

        var company=$('#company').val();
        
        var email=$('#email').val();

        var relation=$('#relation').val();

        var product=$('#product').val();

        var industry=$('#industry').val();

        var interest=$('#interest').val();

        var demand=$('#demand').val();

        var link='mailto:yuyan@vanecloud.com?subject='+encodeURIComponent("测试")+
            '&body=姓名：'+username+'<br/>职位：'+job+'<br/>公司名称：'+company+'<br/>个人邮箱：'+
            email+'<br/>与氢氧的合作关系：'+relation+'<br/>所需产品：'+product+'<br/>所属行业：'+industry+
            '<br/>感兴趣产品：'+interest+'<br/>需求描述：'+demand;

        window.location.href=link;
    }
})
