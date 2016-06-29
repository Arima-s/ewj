$(function (){
    var registerForm = $("#registerForm");
    var token = $("input[name='token']",registerForm).val();
    jQuery.validator.addMethod("accountCheck", function(value, element) {
        var regex = /^[a-zA-Z]([a-zA-Z0-9(_)(\-)]+)$/;
        return this.optional(element) || (regex.test(value));
    }, "只能输入数字、字母、减号和下划线，并且必须字母开头。");

    jQuery.validator.addMethod("mobile", function (value, element) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return  this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写您的手机号码");

    var formValidate = registerForm.validate({
        errorElement: 'span',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
//                debug: true,
        rules: {
            loginId: {required: true,rangelength:[4,20],accountCheck:true,remote:"/" + rappId + "/handler/judgeMemberField.jsx?token=" + token},
            mobilePhone: {required: true,mobile:true,digits:true,remote:"/" + rappId + "/handler/judgeMemberField.jsx?token=" + token},
            mobileValidateCode: {required: true},
            email: {required: true,email: true,remote:"/" + rappId + "/handler/judgeMemberField.jsx?token=" + token},
            password: {required: true,rangelength:[6,20]},
            password_confirm: {required: true,rangelength:[6,20],equalTo: "input[name='password']"},
            captcha:{required:true,remote:rappId + "/handler/judgeCaptcha.jsx"},
            protocol_check:{required:true}
        },
        messages: {
            loginId:{required:"请输入您的用户名",rangelength:"请确认您输入的用户名在4-20字符",accountCheck:"用户名只能输入数字、字母、减号和下划线，并且必须字母开头。",remote:"对不起，此用户名已注册，请换一个"},
            mobilePhone:{required:"请填写您的手机号码",digits:"手机号码应为数字",rangelength:"手机号码为11位数字",mobile:"请正确填写您的手机号码",remote:"对不起，此手机已注册，请换一个"},
            mobileValidateCode:{required:"请填写短信验证码"},
            email:{required:"请输入您的邮箱",email:"请检查您输入的邮箱地址",remote:"对不起，此邮箱已注册。您可以去登陆页面找回密码"},
            password:{required:"请设置您的密码",rangelength:"对不起，请检查您的输入。密码设置支持6-20位字母、符号或数字，密码区分大小写"},
            password_confirm:{required:"请确认密码",rangelength:"对不起，请检查您的输入。密码设置支持6-20位字母、符号或数字，密码区分大小写",equalTo:"两次输入密码不一致，请再次输入"},
            captcha:{required:"请填写验证码",remote:"验证码不正确"},
            protocol_check:{required:"抱歉，必须同意协议才能完成注册！"}
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
            if(element.is("[name='protocol_check']")){
                if(error.text() != ""){
                    error.appendTo(element.closest(".form-group"));
                }
            }else{
                error.appendTo(element.parent());
            }
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error'); // set success class to the control group
        },
        submitHandler: function (form) {
            function cleanPwd(){
                $("input:password",form).val("");
                $("input[name='captcha']",form).val("");
                flushCaptcha();
            }
            $(form).ajaxSubmit({
                type:"post",
                url:rappId + "/handler/register_handler.jsx",
                /***************************************************
                                        here
                ****************************************************/
                dataType:"json",
                //beforeSubmit: showRequest,
                success: function(response){
                    if(response.state){
                        if(response["rurl"]){
                            document.location.href = response["rurl"];
                        }else{
                            document.location.href = window.normalWebSite + "/register_success.html";
                        }
                    }else{
                        if(response.errorCode == "empty_loginId"){
                            var helpBlock = $(".help-block[for='loginId']",form);
                            helpBlock.html("请输入您的用户名");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.loginId.focus();
                            cleanPwd()
                        }else if(response.errorCode == "loginId_unlawful"){
                            var helpBlock = $(".help-block[for='loginId']",form);
                            helpBlock.html("用户名只能输入数字、字母、减号和下划线，并且必须字母开头。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.loginId.focus();
                            cleanPwd()
                        }else if(response.errorCode == "loginId_length_error"){
                            var helpBlock = $(".help-block[for='loginId']",form);
                            helpBlock.html("请确认您输入的用户名在4-20字符");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.loginId.focus();
                            cleanPwd()
                        }else if(response.errorCode == "loginId_exist"){
                            var helpBlock = $(".help-block[for='loginId']",form);
                            helpBlock.html("对不起，此用户名已注册，请换一个");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.loginId.focus();
                            cleanPwd()
                        }else if(response.errorCode == "empty_email"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("请输入您的邮箱");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.email.focus();
                            cleanPwd()
                        }else if(response.errorCode == "empty_unlawful"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("请检查您输入的邮箱地址");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.email.focus();
                            cleanPwd()
                        }else if(response.errorCode == "email_exist"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("对不起，此邮箱已注册。您可以去登陆页面找回密码");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.email.focus();
                            cleanPwd()
                        }else if(response.errorCode == "mobilePhone_exist"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("您输入的手机号码已被注册，请换一个。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.mobilePhone.focus();
                            cleanPwd()
                        }else if(response.errorCode == "mobile_error"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("您输入的手机号码有误,请重新输入。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.mobilePhone.focus();
                            cleanPwd()
                        }else if(response.errorCode == "empty_captcha"){
                            var helpBlock = $(".help-block[for='captcha']",form);
                            helpBlock.html("请填写验证码");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.captcha.focus();
                        }else if(response.errorCode == "captcha_error"){
                            var helpBlock = $(".help-block[for='captcha']",form);
                            helpBlock.html("验证码不正确");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.captcha.focus();
                            flushCaptcha();
                        }else if(response.errorCode == "email_suffix_empty"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("内部员工认证异常");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.email.focus();
                        }else if(response.errorCode == "email_not_employee"){
                            var helpBlock = $(".help-block[for='email']",form);
                            helpBlock.html("申请内部员工认证必须使用华润集团内部邮箱");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.email.focus();
                        }else if(response.errorCode == "phone_validate_code_empty"){
                            var helpBlock = $(".help-block[for='mobileValidateCode']",form);
                            helpBlock.html("短信验证码已失效，请重新发送。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.mobileValidateCode.focus();
                            flushCaptcha();
                        }else if(response.errorCode == "phone_validate_code_overdue"){
                            var helpBlock = $(".help-block[for='mobileValidateCode']",form);
                            helpBlock.html("短信验证码已过期，请重新发送。");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.mobileValidateCode.focus();
                            flushCaptcha();
                        }else if(response.errorCode == "phone_validate_code_error"){
                            var helpBlock = $(".help-block[for='mobileValidateCode']",form);
                            helpBlock.html("短信验证码错误");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.mobileValidateCode.focus();
                            flushCaptcha();
                        }else if(response.errorCode == "parent_not_exists"){
                            var helpBlock = $(".help-block[for='parentId']",form);
                            helpBlock.html("推广员不存在");
                            helpBlock.parent(".form-group").addClass("has-error");
                            form.parentId.focus();
                            flushCaptcha();
                        }else{
                            alert(response.errorCode);
                            cleanPwd()
                        }

                    }
                }
            });
        }
    });

    registerForm.on("click","#flushCode",function(){
        flushCaptcha();
    });

    //$("#flushCode").on("click",function(){
    //    flushCaptcha();
    //});

    function flushCaptcha(){
        $(".captchaImg",registerForm).attr("src","/ValidateCode?t=" + Math.random());
        $("input[name='captcha']",registerForm).val("");
    }

    function cleanPwd(){
        $(".userpassword:password",loginForm).val("");
    }

    $("span.checkbox",registerForm).on("click",function(){
        var curObj = $(this);
        if(curObj.attr("focus") == "true"){
            return;
        }
        var checked = curObj.attr("data-checked") == "true" ? "false" : "true";
        curObj.attr("data-checked",checked);
        if(checked == "true"){
            $("input:hidden",curObj).val("true");
            curObj.addClass("active");
        }else{
            $("input:hidden",curObj).val("");
            curObj.removeClass("active");
        }
    });

    $(".protocolPanel .btnLg").on("click",function(){
        $(".protocolPanel").fadeOut();
        var checkboxObj = $("span.checkbox",registerForm);
        checkboxObj.attr("data-checked","true").addClass("active");
        $("input:hidden",checkboxObj).val("true");
    });

    function calcValue(vc) {
        vc = vc.replace("0.", "");
        var r = "";
        var s1 = vc.substring(0, vc.length / 2);
        var s2 = vc.substring(vc.length / 2, vc.length);
        for (var i = 0; i < vc.length / 2; i++) {
            r += s1.charAt(i);
            r += s2.charAt(i);
        }
        return "0."+r;
    }

    var beWait = false;
    var emailOrMobileBlock = $("#emailOrMobileBlock");
    var registerImgCodeBlock = $("#registerImgCodeBlock");
    emailOrMobileBlock.on("click",".bindBtn",function(){
        var self = $(this);
        if(self.is("#emailBlock")){
            emailOrMobileBlock.html($("#emailTemplate").html());
            registerImgCodeBlock.html($("#registerImgCodeTemplate").html());
            flushCaptcha();
        }else if(self.is("#mobileBlock")){
            emailOrMobileBlock.html($("#mobileTemplate").html());
            registerImgCodeBlock.html("");
            flushCaptcha();
        }else if(self.is("#getMobileCaptcha")){
            if(beWait){
                return
            }
            var mobileObj = $(".userphone",emailOrMobileBlock);
            var mobileResult = formValidate.element(mobileObj);
            if(!mobileResult){
                return false;
            }
            var imgCaptchaObj = $("input[name='captcha']",registerForm);
            var imgCaptchaResult = formValidate.element(imgCaptchaObj);
            if(!imgCaptchaResult){
                return false;
            }

            var pageValidateCode = $("#pageValidateCode").val();
            $.get("/" + rappId + "/handler/getMobileCaptcha.jsx",{mobilePhone:mobileObj.val(),mid:window.mid,pageId:window.pageId,token:token,v:calcValue(hdRValue),r:pageValidateCode,imgCaptcha:imgCaptchaObj.val()},function(resp){
                if(resp.state){
                    alert("短信验证码已成功发出，请注意查收短信。");
                    beWait = true;
                    var timeOut = Number(window.msgInterval);//秒
                    self.html((--timeOut)+"秒");
                    var timer = setInterval(function(){
                        timeOut--;
                        self.html(timeOut+"秒");
                        if(timeOut <=0){
                            clearInterval(timer);
                            self.html("获取短信验证码");
                            beWait = false;
                        }
                    },1000);
                }else{
                    var msg = "";
                    if(resp.errorCode == "mobile_phone_empty"){
                        msg = "请填写您的手机号码";
                    }else if(resp.errorCode == "mobile_phone_exist"){
                        msg = "对不起，此手机已注册，请换一个";
                    }else if(resp.errorCode == "send_error"){
                        msg = "系统繁忙，请稍后再试。";
                    }else if(resp.errorCode == "wait"){
                        msg = "发送太频繁，请稍后再试。";
                    }else if(resp.errorCode == "active"){
                        msg = "短信验证码还在有效期。";
                    }else{
                        msg = resp.msg;
                    }
                    alert(msg);
                }
            },"json");
        }
        return false;
    });
});

  