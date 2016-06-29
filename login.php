<!DOCTYPE html>
<html lang="ch">
<head>
    <title>用户登录 - e万家 - 爱生活.e万家</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" type="text/css" href="style/common.css" rel="stylesheet" /> 
    <link rel="stylesheet" type="text/css" href="style/login.css" rel="stylesheet" />    
    <script src="js/jquery-1.11.3.js" type="text/javascript"></script>


    
</head>
<body class="payBg">

<div class="header" id="Loginpage">
    <div class="center">
        <div class="headerBody mt8">
            <a href="http://www.ewj.com" target="_blank" class="headerLogo" data-type="imgLink" data-id="loginHeaderLogo" imgSize="341X71" style="background-image:url('images/4312385.png');"></a>                           
            <div class="headerBiaoyu">
                <div class="loginTopR mt30">
                    您好，欢迎您来到华润e万家！<span>|</span><a href="http://www.ewj.com/help.html">帮助中心</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>

<div class="center">
    <div class="panel">
        <div class="panelHd">
            <h1>用户登录</h1>
            <a href="signin.html" class="float_r signin">新用户注册</a>
        </div>
        <div class="panelBd" style="position: relative;">
            
            <a href="http://www.ewj.com/kjmlmf.html" target="_blank" class="signIn_adv" data-type="imgLink" data-id="leftImg" imgSize="330X330" style="background-image: url('images/12980406.jpg');"></a>
            

            <div class="UserSignIn signIn">
                <form id="loginForm" action="loginIn.php" method="post" autocomplete="off">
                    <input type="hidden" name="token" value="296820485ef48992655ac8a3b9974484"/>
                    <p class="form-group"><label>登录名 : </label><input class="textInput username" name="loginKey" placeholder="邮箱/用户名/已验证手机" tabindex="1"></p>
                    <p class="mt10 form-group"><label>密码 :</label><input type="password" class="textInput userpassword" name="password" placeholder="请输入您的密码" tabindex="2"></p>
                   <!--  <p class="mt10 aptchaWrap form-group"><label>验证码 : </label><input class="textInput aptcha" name="captcha" placeholder="请填写验证码" tabindex="3" maxlength="4">
                       <img src="getVerify.php" class="captchaImg" height="30"/>
                       <a href="javascript:;" id="flushCode">看不清，换一张？</a>
                   </p> -->
                   <p class="mt35 operatePw">
                       <!--  <span style="" data-checked="true" class="checkbox enableSelect active">
                           <input type="hidden" value="true" name="markPwd">
                           <i></i>
                       </span>
                       自动登录 -->
                        <a style="margin-bottom:10px;" href="http://www.ewj.com/find_password.html">忘记密码</a>
                    </p>
                    <p class="mt10"><button type="submit" class="SignInBtn" name="SignInBtn" tabindex="4">登录</button></p>
                    

                    <input type="hidden" name="rurl" value="http://www.ewj.com/"/>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="center" style="margin-bottom:50px;">
    

    <div class="web_map_My">
        
        <div class="footer_info" style="display: inline-block;" data-type="textLinkList" data-id="footer:bottomLink">
        
        
        <a href="#" target="_blank">关于我们</a><span class="split">|</span>
        
        <a href="#" target="_blank">联系我们</a><span class="split">|</span>
        
        <a href="#" target="_blank">触屏版</a>
        
        
            
        </div>
        
        <span class="copyright" data-type="htmlSource" data-id="footer:copyright">
            
            
            
            Copyright@华润万家有限公司&nbsp;&nbsp;粤ICP备05036369号-4&nbsp;&nbsp;&nbsp;ewj.com&nbsp;版权所有
            
        
            
        </span>

    </div>
</div>

</body>
</html>