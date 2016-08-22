/**
 * Created by admin on 2016/8/17.
 */
$(function() {
    $('input.submit').on('click', function () {

        var valid=$("#form").valid();

        if(valid){
            sendMail();
        }else{
            $(window).scrollTop(640);
        };

        return false;
    });

    $('#form').validate({
        rules:{
            name: {
                required: true,
                minlength: 2,
                maxlength: 10
            },
            job: {
                required: true,
            },

            company: {
                required: true,
            },
            _replyto: {
                required: true,
                email: true
            }
        },
        messages:{
            name: {
                required: '请输入姓名',
                minlength: '姓名不能小于2个字符',
                maxlength: '姓名不能超过10个字符'
            },
            job: {
                required: '请输入职位'
            },
            company: {
                required: '请输入公司名'
            },
            _replyto: {
                required: '请输入电子邮件',
                email: '必须输入正确格式的电子邮件'
            }
        },

        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element).fadeOut().fadeIn();
        },

        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        },

    });

    function sendMail() {

        var name=$('#myText').val();

        var job=$('#job').val();

        var company=$('#company').val();
        
        var _replyto=$('#_replyto').val();

        var relationship=$('#relationship').val();

        var product_need=$('#product_need').val();

        var industry=$('#industry').val();

        var project_want=$('#project_want').val();

        var demand=$('#demand').val();

        var link='mailto:support@vanecloud.com?subject='+encodeURIComponent("氢氧产品体验-个人信息填写")+
            '&body=姓名：'+name+'<br/>职位：'+job+'<br/>公司名称：'+company+'<br/>个人邮箱：'+
            _replyto+'<br/>与氢氧的合作关系：'+relationship+'<br/>所需产品：'+product_need+'<br/>所属行业：'+industry+
            '<br/>感兴趣产品：'+project_want+'<br/>需求描述：'+demand;

        window.location.href=link;
    }
})
