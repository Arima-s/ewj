$(function(){
    function getByClass(oParent, sClass) {
    var aEle = oParent.getElementsByTagName('*');
    var aTmp = [];
    var i = 0;
    for (i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aTmp.push(aEle[i]);
        }
    }
    return aTmp;
}

    var oDiv = document.getElementById('preview_div');
    var oMark = getByClass(oDiv, 'mark')[0];
    var oFloat = getByClass(oDiv, 'float_layer')[0];
    var oBig = getByClass(oDiv, 'out_pic')[0];
    var oSmall = getByClass(oDiv, 'smallImg')[0];
    var oImg = oBig.getElementsByTagName('img')[0];
    oMark.onmouseover = function() {
        oFloat.style.display = 'block';
        oBig.style.display = 'block';
    };
    oMark.onmouseout = function() {
        oFloat.style.display = 'none';
        oBig.style.display = 'none';
    };
    oMark.onmousemove = function(ev) {
        var oEvent = ev || event;
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop               
        var l = oEvent.pageX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth;
        var t = oEvent.pageY - oDiv.offsetTop - oSmall.offsetTop + 75 ;
        if (l < 0) {
            l = 0;
        } else if (l > oMark.offsetWidth - oFloat.offsetWidth) {
            l = oMark.offsetWidth - oFloat.offsetWidth;
        }
        if (t < 0) {
            t = 0;
        } else if (t > oMark.offsetHeight - oFloat.offsetHeight) {
            t = oMark.offsetHeight - oFloat.offsetHeight;
        }
        oFloat.style.left = l + 'px';
        oFloat.style.top = t + 'px';
        var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
        var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
        oImg.style.left = - percentX * (oImg.offsetWidth - oBig.offsetWidth) + 'px';
        oImg.style.top = - percentY * (oImg.offsetHeight - oBig.offsetHeight) + 'px';
    };

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

/*    $('.add').click(function(){
        var val = $('.quantity_txt').val();
        val += 1;
        $('.quantity_txt').val() = val;
    })
*/
    var add = document.getElementById('add');
    var less = document.getElementById('less');
    add.onclick = function(){
        var quantity_txt = document.getElementById('quantity_txt');
        quantity_txt.value = quantity_txt.value - 0 + 1;
    }    
   
});