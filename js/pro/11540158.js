$(function () {
    var banner_list = $(".banner_list"),
        banner_list_li = banner_list.children("li"),
        banner_nav = $(".banner_nav"),
        banner_nav_li = banner_nav.children("li"),
        set_intevBanner;

    var isIE8 = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0");
    var showCss = {};
    if(isIE8){
        showCss = { "opacity": "1","width":"100%"};
    }else{
        showCss = { "opacity": "1"};
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
            }).siblings("li").stop().animate({ "opacity": "0"}, function () {
                $(this).hide().removeClass("active");
            });
        }, function () {
            banner_setInterval();
        });
    });

    function banner_setInterval() {
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
            _list_active.stop().animate({ "opacity": "0"}, function () {
                $(this).hide().removeClass("active");
                _next_list_li.addClass("active");
            });
            _next_list_li.show().stop().animate(showCss);
        }, 3000);
    }

    if(true){
        var priceBlock = $(".textPrimary.price[pid]");
        if(priceBlock && priceBlock.length > 0){
            var idsStr = "",stockIds = "";
            priceBlock.each(function(index,data){
                var self = $(this);
                idsStr += self.attr("pid") + ",";
                if(self.attr("stock") == "true"){
                    stockIds += self.attr("pid") + ",";
                }
            });
            if(idsStr){
                $.get("/" + rappId + "/serverHandler/loadProductPrice.jsx",{ids:idsStr,stockIds:stockIds,tt:Math.random()}, function (resp) {
                    if(resp.state){
                        priceBlock.each(function(index,data){
                            var self = $(this),pid = self.attr("pid") || "",stock = self.attr("stock") || "";
                            var priceJson = resp.priceMap[pid];
                            if(priceJson){
                                if(priceJson.price){
                                    var priceSplit = priceJson.price.split(".");
                                    var html = "";

                                    if(self.attr("qianxian") == "true"){
                                        html = "<span>¥<strong>" + priceSplit[0] + "</strong>." + priceSplit[1] + "</span>";
                                        if(priceJson.marketPrice && parseFloat(priceJson.marketPrice) > 0 && parseFloat(priceJson.price) < parseFloat(priceJson.marketPrice)){
                                            var mkpSplit = (priceJson.marketPrice + "").split(".");
                                            html += '<span class="mk_price">¥<strong>' + mkpSplit[0] + '</strong>.' + mkpSplit[1] + '</span>';
                                        }
                                        self.html(html);
                                    }else{
                                        html = "¥<strong>" + priceSplit[0] + "</strong>." + priceSplit[1];
                                        self.html(html);
                                    }

                                }

                                if(stock){
                                    var parent = self.closest(".pro_detail");
                                    if(priceJson.stockWidth){
                                        parent.find("span.now").css("width",priceJson.stockWidth + "%");
                                    }

                                    if(priceJson.sellableCount){
                                        var buyBtn = self.closest(".pro_detail").find("a.buy");
                                        if(priceJson.sellableCount > 0){
                                            buyBtn.removeClass("enable").attr("href","/product.html?id=" + priceJson.productId + "&mid=" + priceJson.merchantId).attr("target","_blank").html("抢购");
                                        }else{
                                            buyBtn.addClass("enable").removeAttr("href").removeAttr("target").html("已抢完");
                                        }
                                    }

                                }



                            }
                        });
                    }
                },"json");
            }
        }
    }



    function groupOnHandler(){
        var groupTimer;
        var groupOnBlock = $("#groupOnBlock");

        $(".item",groupOnBlock).each(function(index,data){
            var selfObj = $(this);
            var id = selfObj.attr("pid"),mid = selfObj.attr("mid");
            $.get("/" + rappId + "/serverHandler/loadGroupOn.jsx",{id:id,mid:mid,tt:Math.random()}, function (resp) {
                if(resp.state){
                    var priceMap = resp.priceMap;
                    var html = "";

                    html += (priceMap.priceName ? priceMap.priceName : '团购价') + ":&nbsp;";

                    var priceSplit = priceMap.price.split(".");
                    html += '<p class="textPrimary t1">';
                    html += "¥<strong>" + priceSplit[0] + "</strong>." + priceSplit[1];
                    html += "</p>"
                    $(".groupOnPrice",selfObj).html(html);


                    var html2 = "";
                    var mkPriceAndSaleAmount = $(".mkPriceAndSaleAmount",selfObj);

                    //if(priceMap.sellableCount){
                    //    $(".quantity",selfObj).html("仅剩" + priceMap.sellableCount + "份");
                    //}
                    //

                    if(priceMap.marketPrice && parseFloat(priceMap.price) < parseFloat(priceMap.marketPrice)){
                        html2 += '<s class="scj">¥&nbsp;' + priceMap.marketPrice + '</s>';
                    }

                    if(priceMap.salesAmount){
                        html2 += '已抢：<strong class="count">' + priceMap.salesAmount + '件</strong>';
                    }
                    mkPriceAndSaleAmount.html(html2);


                    selfObj.attr("beginTime",priceMap.beginDateTime ? priceMap.beginDateTime : '')
                    selfObj.attr("endTime",priceMap.endDateTime ? priceMap.endDateTime : '')
                    if(selfObj.is(".active")){
                        groupOnOverTime();
                    }
                }
            },"json");
        });


        function groupOnOverTime(){
            var activeItem = $(".item.active",groupOnBlock);
            var over_time = $(".over_time",groupOnBlock);
            if(activeItem.attr("beginTime") !="" && activeItem.attr("endTime") !=""){
                groupTimer = over_time.Countdown({
                    "hour": over_time.find(".hour"),
                    "minute": over_time.find(".minute"),
                    "second": over_time.find(".second"),
                    "beginTime": parseInt(activeItem.attr("beginTime")),
                    "endTime": parseInt(activeItem.attr("endTime")),
                    "callback": function () {
                    }
                });
                over_time.show();
            }else if(over_time.attr("empty") =="true"){
                groupTimer = over_time.Countdown({
                    "hour": over_time.find(".hour"),
                    "minute": over_time.find(".minute"),
                    "second": over_time.find(".second"),
                    "beginTime": new Date().getTime(),
                    "endTime": new Date().getTime() + (1*60*60*1000),
                    "callback": function () {
                    }
                });
                over_time.show();
            }else{
                over_time.hide();
            }
        }
        groupOnOverTime()

        $(".dot span",groupOnBlock).on("mouseover",function(){
            var curObj = $(this);
            if(curObj.is(".active")){
                return;
            }
            var target = $("#group_item_" + curObj.attr("idx"));
            target.siblings(".item").removeClass("active")
            clearInterval(groupTimer);
            target.addClass("active")
            groupOnOverTime();
            curObj.siblings().removeClass("active")
            curObj.addClass("active")

        });
    }
    groupOnHandler()




    var scroll_Now = $(".scroll_Now"),
        SiteBtm = $(".headerBody");

    $(window).scroll(function () {
        var that = $(this);
        if (that.scrollTop() >= scroll_Now.offset().top) {
            SiteBtm.addClass("scroll");
//            console.log("ok");
        } else {
            SiteBtm.removeClass("scroll");
        }
    });


    function brandSlide(){
        $(".brandSlide").each(function(){
            var self = $(this);
            var linkList = $(".brandSlideBd a.show",self);
            if(linkList.length > 3){
                $(".brandSlideHd .prev,.brandSlideHd .next",self).show();
                self.slide({ titleCell:".brandSlideHd i", mainCell:".brandSlideBd ul",autoPlay:true});
            }
        });
    }
    brandSlide();


    var greyImg = $("#greyImg").attr("src");
    $("img[original]").lazyload({
        placeholder:greyImg,
        failurelimit: 10,
        effect: "fadeIn",
        threshold : 200
    });



    if(true){
        var sideAdvs = $(".floorItem .side_gg");
        sideAdvs.each(function(index,data){
            var selfObj = $(this);
            var banner_list = $(".gg",selfObj),
                banner_list_li = banner_list.children("li"),
                banner_nav = $(".side_nav",selfObj),
                banner_nav_li = banner_nav.children("span"),
                set_intevBanner;

            if(banner_list_li.length < 2){
                return true;
            }

            var isIE8 = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0");
            var showCss = {};
            if(isIE8){
                showCss = { "opacity": "1","width":"100%"};
            }else{
                showCss = { "opacity": "1"};
            }
            banner_setInterval();
            banner_nav_li.each(function (i) {
                var that = $(this);

                that.hover(function () {
                    var _list_that = banner_list_li.eq(i);
                    clearInterval(set_intevBanner);
                    that.addClass("active").siblings("span").removeClass("active");
                    _list_that.show().stop().animate(showCss, function () {
                        $(this).addClass("active");
                    }).siblings("li").stop().animate({ "opacity": "0"}, function () {
                        $(this).hide().removeClass("active");
                    });
                }, function () {
                    banner_setInterval();
                });
            });

            function banner_setInterval() {
                set_intevBanner = setInterval(function () {
                    var _list_active = banner_list.children("li.active"),
                        _next_list_li = _list_active.next("li"),
                        _nav_active = banner_nav.children("span.active"),
                        _next_nav_li = _nav_active.next("span");
                    if (_next_list_li.length <= 0) {
                        _next_list_li = banner_list.children("li").eq(0);
                        _next_nav_li = banner_nav.children("span").eq(0);
                    }


                    _nav_active.removeClass("active");
                    _next_nav_li.addClass("active");
                    _next_list_li.show().stop().animate(showCss);
                    _list_active.stop().animate({ "opacity": "0"}, function () {
                        $(this).hide().removeClass("active");
                        _next_list_li.addClass("active");
                    });
                }, 3000);
            }
        });




    }


    if(true){
        $("[data-type='tabs']").each(function (index,domEle) {
            $("[tab-target]",$(domEle)).mouseenter(function(){
                $("[tab-target]",$(domEle)).removeClass("cur");
                $(this).addClass("cur");
                /*将tab-target对应的内容隐藏*/
                var target = $(this).attr("tab-target");
                $("[tab-target]",$(domEle)).each(function(i,ele){
                    var t = $(ele).attr("tab-target");
                    $("#" + t).hide();
                });
                /*然后再显示出来*/
                $("#" + target).show();
            });
            /*只显示cur Tab对应的内容*/
            $("[tab-target]",$(domEle)).each(function(i,ele){
                var t = $(ele).attr("tab-target");
                var isCur = $(ele).hasClass("cur");
                if(!isCur){
                    $("#" + t).hide();
                } else{
                    $("#" + t).show();
                }

            });
        });
    }



});

//倒计时
$.fn.extend({
    Countdown: function (options) {
        var that = this,
            el = $(that);
        that.options = {
            "text": el.find(".text"),
            "day": el.find(".day"),
            "hour": el.find(".hour"),
            "minute": el.find(".minute"),
            "second": el.find(".second"),
            "callback": function () { }
        }
        for (var i in options) {
            this.options[i] = options[i];
        }
        function getDate(strDate) {
            var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/, function (a) {
                return parseInt(a, 10);
            }).match(/\d+/g) + ')');
            return date;
        }
        var opt = that.options,nMS,textMsg,curTime,beginTime = opt.beginTime,endTime = opt.endTime;
        var setIntv = setInterval(function () {
            curTime = new Date().getTime();
            if(curTime < beginTime){
                //未开始
                nMS = beginTime - curTime;
                textMsg = "离开始时间";
            }else if(curTime < endTime){
                //未结束
                nMS = endTime - curTime;
                textMsg = "剩余时间";
            }else{
                //已结束
                textMsg = "已结束";
                clearInterval(setIntv);
                opt.callback(that);
            }

            var nH = (Math.floor(nMS / (1000 * 60 * 60)) % 24) % 60;
            //定义获得小时
            var nM = (Math.floor(nMS / (1000 * 60)) % 60) % 60;
            //定义获得分钟
            var nS = (Math.floor(nMS / 1000) % 60) % 60;
            //定义获得秒

            opt.text.html(textMsg);
            opt.second.html(nS);
            opt.minute.html(nM);
            opt.hour.html(nH);
            nMS -= 1000;

            if (nH == 0 && nM == 0 && nS == 0) {
                clearInterval(setIntv);
                opt.callback(that);
            }
        }, 1000);
        return setIntv;
    }
});  