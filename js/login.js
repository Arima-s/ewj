$(function (){
    var loginForm = $("#loginForm");
    function stripscript(s) {
        return rs;
    }
    jQuery.validator.addMethod("checkKey", function (value, element) {
        var result = true;
        //var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]")
        var pattern=/[`~!#$%^&*()+<>?:"{},\/;'[\]]/im;
        for (var i = 0; i < value.length; i++) {
            var val = value[i];
            if(pattern.test(val)){
                result = false;
                break;
            }
        }
        return  this.optional(element) || result;
    }, "用户名包含非法字符，请检查输入。");

    var formValidate = loginForm.validate({
        errorElement: 'span',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
                debug: true,
        rules: {
            loginKey: {required: true,checkKey:true},
            password: {required: true,rangelength:[6,20]},
            captcha:{required:true}
        },
        messages: {
            loginKey:{required:"请输入您的登录名",rangelength:"请确认您输入的用户名，用户名为4-20位字符",checkKey:"用户名包含非法字符，请检查输入。"},
            password:{required:"请填写密码",rangelength:"请确认您输入的密码，密码为6-20位字符。"},
            captcha:{required:"请填写验证码"}
        },
        invalidHandler: function (event, validator) { //display error alert on form submit

        },
        highlight: function (element) { // hightlight error inputs
            $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
        },
        unhighlight: function (element) { // revert the change done by hightlight
            var formGroup = $(element).closest('.form-group');
            formGroup.removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error'); // set success class to the control group
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type:"post",
                url:rappId + "/handler/login_handler.jsx?rurl="+$("[name='rurl']").val(),
                dataType:"json",
                beforeSubmit: function(){

                },
                success: function(response){
                    if(response.state){
                        var redirect = "";
                        if(response["rurl"] && response["rurl"] != ""){
                            redirect = response["rurl"];
                        }else{
                            redirect = window.normalWebSite + "/ucenter/index.html";
                        }
                        document.location.href = redirect;
                    }else{
                        if(response.errorCode == "data_error"){
                            alert("用户数据异常，请与客服联系。");
                        }else if(response.errorCode == "password_error"){
                            var helpBlock = $(".help-block[for='password']",form);
                            helpBlock.html("您输入的密码有误，请重新输入。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            $("input:password",form).focus();
                        }else if(response.errorCode == "member_not_exist"){
                            var helpBlock = $(".help-block[for='loginKey']",form);
                            helpBlock.html("此用户名未注册。新会员请先注册");
                            helpBlock.parent(".form-group").addClass("has-error");
                            $("input.username",form).focus();
                        }else if(response.errorCode == "account_or_pwd_error"){
                            var helpBlock = $(".help-block[for='loginKey']",form);
                            helpBlock.html("用户名不存在或密码错误，请检查输入。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            $("input.username",form).focus();
                        }else if(response.errorCode == "not_enabled"){
                            alert("用户处于冻结状态，不能登录。");
                        }else if(response.errorCode == "system_error"){
                            alert("系统繁忙，请稍后再试。");
                        }else if(response.errorCode == "captcha_error"){
                            var helpBlock = $(".help-block[for='captcha']",form);
                            helpBlock.html("验证码不正确");
                            helpBlock.parent(".form-group").addClass("has-error");
                        }else if(response.errorCode == "locked"){
                            var helpBlock = $(".help-block[for='loginKey']",form);
                            helpBlock.html("账号被检测为异常登录，该账号将锁定"+response.lockingTime+"分钟。");
                            helpBlock.parent(".form-group").addClass("has-error");
                        }
                        $("input:password",form).val("");
                        flushCaptcha();
                    }
                }
            });
        }
    });

    $("#flushCode").on("click",function(){
        flushCaptcha();
    });

    function flushCaptcha(){
        $(".captchaImg",loginForm).attr("src","/ValidateCode?t=" + Math.random());
        $("input.aptcha",loginForm).val("");
    }


    $("span.checkbox",loginForm).on("click",function(){
        var curObj = $(this);
        var checked = curObj.attr("data-checked") == "true" ? "false" : "true";
        curObj.attr("data-checked",checked);
        if(checked == "true"){
            $("input:hidden",curObj).val("true");
            curObj.addClass("active");
        }else{
            $("input:hidden",curObj).val("false");
            curObj.removeClass("active");
        }
    });
});
  