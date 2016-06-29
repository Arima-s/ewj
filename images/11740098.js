$(function () {
    /* sidebar */
    function sidebar(){
        //  show nav item
        var itemHideTimer = null;

        if(typeof isHideCategoriesMenu === 'undefined' || isHideCategoriesMenu == ""){
            $('.sideGoodCategoriesMenu').mouseover(function (){
                clearTimeout(itemHideTimer);
                $(this).addClass('active')
                    .find('.list').show();
            }).mouseout(function (){
                clearTimeout(itemHideTimer);
                hideNavItem();
            });
        }


        $('.sideGoodCategoriesMenu .list').mouseover(function (){
            clearTimeout(itemHideTimer);
        }).mouseout(function (){
            clearTimeout(itemHideTimer);
            hideNavItem();
        });

        //  show nav item detail
        var hideTimer = null;

        $('.sideGoodCategoriesMenu .list li').mouseover(function (){
            clearTimeout(itemHideTimer);
            clearTimeout(hideTimer);
            $('.sideGoodCategoriesDetail .item').hide()
                .eq($(this).index()).show();
            $('.sideGoodCategoriesDetail').show();
        }).mouseout(function (){
            hideItemDetail();
            hideNavItem();
        });

        $('.sideGoodCategoriesDetail .item').mouseover(function (){
            clearTimeout(itemHideTimer);
            clearTimeout(hideTimer);
        }).mouseout(function (){
            hideItemDetail();
            hideNavItem();
        });

        function hideNavItem (){
            itemHideTimer = setTimeout(function (){
                $('.sideGoodCategoriesMenu').removeClass('active')
                    .find('.list').hide();
            },100);
        }

        function hideItemDetail (){
            hideTimer = setTimeout(function (){
                $('.sideGoodCategoriesDetail').hide();
                $('.sideGoodCategoriesDetail .item').hide()
                    .eq($(this).index()).hide();
            }, 100);
        }
    }

    sidebar();

    // go top
    $(".go_top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 200);
    });


    /* Table components
     * used: mywanjiaIndex.html
     * */
    function components_Table() {
        $('.table .tableThumb').each(function (){
            var thumbs = $(this).find('a');

            if (thumbs.length > 3) {
                $(this).find('.tableThumbSwitch').show();
            }

            // bind switch btn
            $(this).find('.tableThumbSwitch').click(function (){

                if (!$(this).prop('data-collapse')) {
                    $(this).siblings('.tableThumbBd').animate({ 'width': (50+8) * thumbs.length + 'px'});
                    $(this).prop('data-collapse', true);
                } else {
                    $(this).siblings('.tableThumbBd').animate({ 'width': 170 + 'px'});
                    $(this).prop('data-collapse', false);
                }
            });
        });
    }

    components_Table();

    //function components_Checkbox(){
    //    $('.checkbox').click(function (){
    //        if ($(this).attr('data-checked') != 'true') {
    //            $(this).attr('data-checked', true).addClass('active');
    //        } else {
    //            $(this).attr('data-checked', false).removeClass('active');
    //        }
    //    });
    //}
    //components_Checkbox();

    /* floatEntry */
    function floatEntry (){
        $(window).scroll(function (){
            if($(window).scrollTop() >= 490) {
                $('.floatEntry').fadeIn();
            } else {
                $('.floatEntry').fadeOut();
            }
        })
    }

    floatEntry();

    /* panel */
    function panel(){
        $('.messagePanel .closeBtn').click(function () {
            $(this).parents('.messagePanel').fadeOut();
        });
    }
    panel();


    /* comment-img: img tab */
    function commentImg (){
        var mod = $('.comment-img'),
            hdItem = mod.find('.comment-img-hd li'),
            bdItem = mod.find('.comment-img-bd li'),
            bdItemLen = bdItem.length,
            prevBtn = mod.find('.prev'),
            nextBtn = mod.find('.next');

        hdItem.click(function (){
            var index = $(this).index();

            $(this).addClass('active')
                .siblings('li').removeClass('active');

            $(this).parents('.comment-img-hd')
                .siblings('.comment-img-bd').show().find('li').removeClass('active')
                .eq(index).addClass('active');
        });

        prevBtn.click(function (){
            var nowItemIndex = $('.comment-img-hd li.active').index();

            if(nowItemIndex > 0) {
                hdItem.eq(nowItemIndex).removeClass('active')
                    .prev('li').addClass('active');
                bdItem.eq(nowItemIndex).removeClass('active')
                    .prev('li').addClass('active');
            } else {
            }
        });

        nextBtn.click(function (){
            var nowItemIndex = $('.comment-img-hd li.active').index();

            if(nowItemIndex < bdItemLen-1) {
                hdItem.eq(nowItemIndex).removeClass('active')
                    .next('li').addClass('active');
                bdItem.eq(nowItemIndex).removeClass('active')
                    .next('li').addClass('active');
            } else {
            }
        });

    }
    //commentImg();

    // upload images and preview
    var uploadImgIndex = 0;
    function upLoadImg (){
        function change(obj, img) {
            var pic = $(img);
            var file = $(obj);
            var ext=file.val().substring(file.val().lastIndexOf(".")+1).toLowerCase();
            // gif在IE浏览器暂时无法显示
            if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
                alert("文件必须为图片！"); return;
            }
            // IE浏览器
            if (document.all) {
                file.select();
                file.blur();
                var reallocalpath = document.selection.createRange().text;
                var ie6 = /msie 6/i.test(navigator.userAgent);
                // IE6浏览器设置img的src为本地路径可以直接显示图片
                if (ie6) pic.src = reallocalpath;
                else {
                    /*这种方式不能控制大小*/
                    // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
                    //pic[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
                    // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
                    // pic[0].src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
                    pic = pic.parent('div');
                    pic.html('');
                    pic[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    pic[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = reallocalpath;
                    pic[0].style.width = "100px";
                    pic[0].style.height = "100px";
                }
            }else{
                html5Reader(file, img);
            }
        }

        function html5Reader(file, img){
            var file = file[0].files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
                var pic = $(img);
                pic.attr("src", this.result);

            }
        }

        // call
        //$('.chooseFile').change(function (){
        //    var imgWrap = $(this).parents('.uploadImg');
        //
        //    // create img dom
        //    imgWrap.find('.imgList')
        //        .append('<span data-index="' + uploadImgIndex +'"><img/></span>');
        //
        //    // create img
        //    change($(this), '.uploadImg span[data-index="' + uploadImgIndex +'"] img');
        //
        //    // add img src to input
        //    imgWrap.find('input[type="hidden"]')
        //        .eq(imgWrap.find('img').length-1).attr("value", imgWrap.find('.chooseFile').val());
        //
        //    // updata imgCount
        //    imgWrap.find('.imgCount span').text(imgWrap.find('img').length);
        //});
    }
    //upLoadImg();

    function flushCartItemCount(){
        $.get("/"+hd_appId + "/serverHandler/getCountInCart.jsx",{t:Math.random()},function(data){
            var totalNumber = '0';
            if(data){
                totalNumber = data.count;
            }
            $("#cartItemNumber").html(totalNumber + "");
            $("#sideCartItemNumber").html(Number(totalNumber) > 99 ? "99+" : totalNumber+"");

        },"json");
    }
    flushCartItemCount();


    //购物车商品项删除全局事件
    $(document).ajaxSuccess(function(evt, request, settings) {
        if(settings.url == "handle/v3/deleteCartItem.jsp" || settings.url == "handle/v3/changeAmount.jsp"){
            if(JSON.parse(request.responseText).state == "ok"){
                flushCartItemCount();
            }
        }else if(settings.url == "/shopping/handle/v3/do_buy.jsp"){
            if(request.responseText.indexOf("ok---") != -1){
                flushCartItemCount();
            }
        }
        return;
    });


    $.get("/"+hd_appId + "/serverHandler/checkLogin.jsx",{t:Math.random()},function(resp){
        //默认未登录
        var loginNameBlock = "您好";
        var rurl = encodeURIComponent(window.location.href);
        var loginLinkBlock = '<a href="/login.html?rurl=' + rurl + '" rel="nofollow">登录</a><a href="/register.html" rel="nofollow">注册</a>';
        if(resp.state){
            if(resp.alreadyLogin){
                loginNameBlock = "Hi " + resp.loggedUserName;
                loginLinkBlock = '<a href="/ucenter/index.html" rel="nofollow">会员中心</a><a href="/logout.html" rel="nofollow">退出</a>';

                $("#loginMsgBlock").html('欢迎回到<font class="colore14041">e万家</font>！');
            }else{
                resp.sslWebSite = resp.sslWebSite || "";//加上为空判断
                loginNameBlock = "您好";
                loginLinkBlock = '<a href="'+resp.sslWebSite+'/login.html?rurl=' + rurl + '" rel="nofollow">登录</a><a href="'+resp.sslWebSite+'/register.html" rel="nofollow">注册</a>';
            }
        }
        $("#loginNameBlock").html(loginNameBlock);
        $("#loginLinkBlock").html(loginLinkBlock);
    },"json");

    var searchForm = $("#search_form");
    var inputKeyword = $("#input_keyword", searchForm);
    if (searchForm.attr("autoSuggest") == "true") {
        $.searchTypeaheads("#input_keyword");
    }



    searchForm.submit(function(event){
        var keywordValue = inputKeyword.val();
        keywordValue = window.encodeURIComponent(keywordValue);
        var cidObj = $("#cid",searchForm);
        var formHtml = '<form id="real_search_form" method="' + searchForm.attr("method") + '" action="' + searchForm.attr("action") + '">';
        formHtml += '<input type="hidden" name="' + inputKeyword.attr("name") + '" value="' + keywordValue + '"/>';
        formHtml += '<input type="hidden" name="' + cidObj.attr("name") + '" value="' + cidObj.val() + '"/>';
        formHtml += '</form>';
        searchForm.parent().append(formHtml);
        $("#real_search_form").submit();
        event.stopPropagation();

        return false;
    });

    var mySwiper;
    mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        direction: 'vertical',
        loop: true,
        autoHeight: true
    });
    $("#pageTopBanner").on("mouseover",function(){
        container_contro("over");
    })
    $("#pageTopBanner").on("mouseout",function(){
        container_contro("out");
    })
    function container_contro(state) {
        if (state == "over") {
            mySwiper.stopAutoplay();
        }
        else if (state == "out") {
            mySwiper.startAutoplay();
        }

    }


});

//var pathname = window.location.pathname;
//if (silde_nav_menu.length >= 1 && (pathname != "/" && pathname != "/index.jsp")) {
//    silde_nav.hide();
//}  