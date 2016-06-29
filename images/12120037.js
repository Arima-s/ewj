$(function () {
    var initconfigs = {
        getAttrsUrl: "/appMarket/appEditor/getProductAttrs.jsp",
        completeUrl: "/shopping/handle/v3/do_buy.jsp",
        attr_container: ".attrBox",
        loadAfterEvent: {
            fireEvent: function (cxt) {
                doLoadAfterEvent(cxt);
            }
        },
        completeAfterEvent: {
            fireEvent: function (cxt) {
//                layer.close(skuLayer);
                var tips = '加入购物车<span class="floatTips' + (!cxt.state ? ' error' : '') + '">' + cxt.msg + '<i></i></span>';
                cxt.target.html(tips);
                var timer = 0;
                clearTimeout(timer);
                var tipsObj = $(".floatTips", cxt.target);
                tipsObj.fadeIn();
                var timer = setTimeout(function () {
                    tipsObj.fadeOut();
                }, 1000);

                tipsObj.mouseover(function () {
                    clearTimeout(timer);
                });

                tipsObj.mouseout(function () {
                    timer = setTimeout(function () {
                        tipsObj.fadeOut();
                    }, 1000);
                });

            }
        }
    };

    function doLoadAfterEvent(cxt) {
        if (!skuSelector) {
            return;
        }
        document.location.href = cxt.target.attr("href");
    }

    var skuSelector = new $.SkuSelector(initconfigs);
    $(".tab-content").on("click", ".btn-buy", function () {
        var curObj = $(this), pid = curObj.attr("pid");
        var config = {productId: pid, target: curObj};
        skuSelector.load(config);
        return false;
    });


    var banner_list = $(".banner_list"),
        banner_list_li = banner_list.children("li"),
        banner_nav = $(".banner_nav"),
        banner_nav_li = banner_nav.children("li"),
        set_intevBanner;

    var isIE8 = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0");
    var showCss = {};
    if (isIE8) {
        showCss = {"opacity": "1", "width": "100%"};
    } else {
        showCss = {"opacity": "1"};
    }
    banner_setInterval();
    banner_nav_li.each(function (i) {
        var that = $(this);

        that.hover(function () {
            var _list_that = banner_list_li.eq(i);
            clearInterval(set_intevBanner);
            that.addClass("active").siblings("li").removeClass("active");
            _list_that.show().stop().animate(showCss, function () {
                $(this).addClass("active");
            }).siblings("li").stop().animate({"opacity": "0"}, function () {
                $(this).hide().removeClass("active");
            });
        }, function () {
            banner_setInterval();
        });
    });

    function banner_setInterval() {
        //only scroll when there are more than 1 image
        if (banner_list && $(banner_list).find('li').size() > 1) {
            set_intevBanner = setInterval(function () {
                var _list_active = banner_list.children("li.active"),
                    _next_list_li = _list_active.next("li"),
                    _nav_active = banner_nav.children("li.active"),
                    _next_nav_li = _nav_active.next("li");
                if (_next_list_li.length <= 0) {
                    _next_list_li = banner_list.children("li").eq(0);
                    _next_nav_li = banner_nav.children("li").eq(0);
                }


                _nav_active.removeClass("active");
                _next_nav_li.addClass("active");
                _next_list_li.show().stop().animate(showCss);
                _list_active.stop().animate({"opacity": "0"}, function () {
                    $(this).hide().removeClass("active");
                    _next_list_li.addClass("active");
                });
            }, 3000);
        }

    }


    var greyImg = $("#greyImg").attr("src");
    $("img[original]").lazyload({
        placeholder: greyImg,
        failurelimit: 10,
        effect: "fadeIn",
        threshold: 200
    });


    if (true) {
        window.jsonpcallback = function (json) {
            $('.price').each(function (index, ele) {
                var priceId = $(ele).attr('priceId');
                for (var i = 0; i < json.length; i++) {
                    var pj = json[i];
                    if (pj && pj.productId == priceId) {
                        if (pj.memberPrice) {
                            var priceText = pj.memberPrice + '';
                            var sp = priceText.split('.');
                            var str = '&yen;<strong>' + sp[0] + (sp[1] && sp[1].length > 1 ? "." + sp[1] : ".00");
                            $(ele).html(str);
                        }

                    }
                }
            });
            $('.member_price').each(function (index, ele) {
                var priceId = $(ele).attr('priceId');
                for (var i = 0; i < json.length; i++) {
                    var pj = json[i];
                    if (pj && pj.productId == priceId) {
                        if (pj.memberPrice) {
                            $(ele).find('span:last').text(pj.memberPrice);
                        }

                    }
                }
            });
        };
        var data = [];
        $('.price,.member_price').each(function (index, ele) {
            var priceId = $(ele).attr('priceId');
            if (priceId) {
                (data.push($(ele).attr('priceId')));
            }
        });
        var priceUrl = "/" + rappId + '/serverHandler/kuajing_index_price_asyc.jsx';
        $.ajax({
            async: false,
            url: priceUrl,
            type: "POST",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                mid: 'm_60000',
                data: data.join(',')
            },
            timeout: 5000,
            beforeSend: function () {
                /* jsonp 方式此方法不被触发.原因可能是dataType如果指定为jsonp的话,就已经不是ajax事件了 */
            },
            success: function (json) { /*客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数*/
                if (json.actionErrors.length != 0) {
                    alert(json.actionErrors);
                }
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
            error: function (xhr) {
            }
        });
    }

    if (true) {
        $("[data-type='tabs']").each(function (index, domEle) {
            $("[tab-target]", $(domEle)).mouseenter(function () {
                $("[tab-target]", $(domEle)).removeClass("cur");
                $(this).addClass("cur");
                /*将tab-target对应的内容隐藏*/
                var target = $(this).attr("tab-target");
                $("[tab-target]", $(domEle)).each(function (i, ele) {
                    var t = $(ele).attr("tab-target");
                    $("#" + t).hide();
                });
                /*然后再显示出来*/
                $("#" + target).show();
            });
            /*只显示cur Tab对应的内容*/
            $("[tab-target]", $(domEle)).each(function (i, ele) {
                var t = $(ele).attr("tab-target");
                var isCur = $(ele).hasClass("cur");
                if (!isCur) {
                    $("#" + t).hide();
                } else {
                    $("#" + t).show();
                }

            });
        });
    }

    $(".global-category>.item").mouseover(function () {
        $(".global-category>.item").removeClass("active");
        $(this).addClass("active");
        $(".global-category-detail").show();
        var gcui = $(".global-category-detail>ul>.item");
        gcui.hide();
        $(gcui[$(this).index()]).show()
    });

    $(".global-category-detail>ul>.item>.listWrap>a").mouseover(function () {
        $(this).css('color', "#f3484a")
    }).mouseout(function () {
        $(this).css('color', "")
    });

    $(".sideGoodCategoriesBd").mouseleave(function () {
        $(".global-category>.item").removeClass("active");
        $(".global-category-detail").hide()
    })


});
  