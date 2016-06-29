$(function() {
    /********************************
                Header     ani   
    *********************************/
	var header_ani = setInterval(ani,3000);
	var nTop = -70.5;

	function ani(){
		if (nTop < -140) {
			nTop = 0;
			$(".header_ani_ul").css({top:nTop});

		}
		
		nTop = nTop - 70.5;
		$(".header_ani_ul").animate({top:nTop},1000);
        // $(".header_ani_ul").hover(function() {
        //     /* Stuff to do when the mouse enters the element */
        //     clearInterval(header_ani);
        // }, function() {
        //     /* Stuff to do when the mouse leaves the element */
        //     header_ani = setInterval(ani,3000);
        // });
	};

	/********************************
                Header     end   
    *********************************/


	/********************************
     		banner_list 	start	
    *********************************/


	var banner_list = $(".banner_list"),
        banner_list_li = banner_list.children("li"),
        banner_nav = $(".banner_nav"),
        banner_nav_li = banner_nav.children("li"),
        set_intevBanner;
 
    banner_setInterval();
    banner_nav_li.each(function (i) {
        var that = $(this);

        that.hover(function () {
            var _list_that = banner_list_li.eq(i);
            clearInterval(set_intevBanner);
            that.addClass("active").siblings("li").removeClass("active");
            _list_that.stop().show().animate({opacity:1}, function () {
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
            _next_list_li.show().stop().animate({opacity:1});
        }, 2500);
    }
    /********************************
            banner_list     end   
    *********************************/



    /********************************
            sidebar     start   
    *********************************/


    function sidebar(){
        //  show nav item
        var itemHideTimer = null;

        //  show nav item detail
        var hideTimer = null;
        $('.sidebar_list_ul').children('li').mouseover(function (){
            clearTimeout(itemHideTimer);
            clearTimeout(hideTimer);
            $('.sideGoodCategoriesDetail').fadeIn();
            $('.sideGoodCategoriesDetail .item').stop().hide()
                .eq($(this).index()).fadeIn();
        }).mouseout(function (){
            hideItemDetail();
          
        });

       
    
    $('.sideGoodCategoriesDetail .item').mouseover(function (){
            clearTimeout(itemHideTimer);
            clearTimeout(hideTimer);
        }).mouseout(function (){
            hideItemDetail();
          
        });


        function hideItemDetail (){
            hideTimer = setTimeout(function (){
                $('.sideGoodCategoriesDetail').hide();
                $('.sideGoodCategoriesDetail .item').hide()
                    .eq($(this).index()).hide();
            },0);
        }
    }
	
    sidebar();

    /********************************
            sidebar     end   
    *********************************/


    /********************************
            floatEntry     start   
    *********************************/
     function floatEntry (){
        $(window).scroll(function (){
            if($(window).scrollTop() >= 150) {
                $('.floatEntry').fadeIn();
            } else {
                $('.floatEntry').fadeOut();
            }
        })
         $(".go_top").click(function () {
                $("html,body").animate({ "scrollTop": 0 }, 300);
        });
    }

    floatEntry();


    /********************************
            floatEntry     end  
    *********************************/


    /********************************
            tab control     start   
    *********************************/
//data-type=tabs  
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


/*
  settimeout(0)的作用

    不同浏览器的实现情况不同,HTML5定义的最小时间间隔是4毫秒. 使用settimeout(0)会使用浏览器支持的最小时间间隔.所以当我们需要把一些操作放到下一帧处理的时候,我们通常使用settimeout(0)来hack.
     
    requestAnimationFrame

    这个函数与settimeout很相似,但它是专门为动画而生的.settimeout经常被用来做动画.我们知道动画达到60帧,用户就无法感知画面间隔.每一帧大约16毫秒.而requestAnimationFrame的帧率刚好是这个频率.除此之外相比于settimeout,还有以下的一些优点:
     
    requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧,每帧大约16毫秒.
    在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
    但它优于setTimeout/setInterval的地方在于它是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。

    浏览器的内核是多线程的，它们在内核制控下相互配合以保持同步，一个浏览器至少实现三个常驻线程：javascript引擎线程，GUI渲染线程，浏览器事件触发线程。
    javascript引擎是基于事件驱动单线程执行的.JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序。
    当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。但需要注意 GUI渲染线程与JS引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
    当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可来自JavaScript引擎当前执行的代码块如setTimeOut、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。

*/    


});