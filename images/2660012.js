(function ($) {
    $.SkuSelector = function (initconfigs) {
        var $that = this;
        $that.attrs = [];
        $that.skus = [];
        $that.loadAfterEvent = undefined;
        $that.completeAfterEvent = undefined;
        $that.selectedValue = {};
        $that.num = 1;

        if (initconfigs) {
            $that.getAttrsUrl = initconfigs.getAttrsUrl ? initconfigs.getAttrsUrl : undefined;
            $that.completeUrl = initconfigs.completeUrl ? initconfigs.completeUrl : undefined;
            $that.loadAfterEvent = initconfigs.loadAfterEvent ? initconfigs.loadAfterEvent : undefined;
            $that.completeAfterEvent = initconfigs.completeAfterEvent ? initconfigs.completeAfterEvent : undefined;
            $that.attr_container = initconfigs.attr_container ? initconfigs.attr_container : undefined;
        }

        $that.load = function (config) {
            $that.productId = undefined;
            if (config) {
                $that.productId = config.productId ? config.productId : undefined;
                $that.oldSelectedSkuId = config.oldSelectedSkuId ? config.oldSelectedSkuId : undefined;
                $that.itemId = config.itemId ? config.itemId : undefined;
                $that.ruleId = config.ruleId ? config.ruleId : undefined;
                $that.cartId = config.cartId ? config.cartId : undefined;
                $that.target = config.target ? config.target : undefined;

            }
            if(!$that.productId){
                throw "productId is undefined";
            }
            $that.reSetSelectedValue();
            var postData = {productId: $that.productId};
            $.ajax({
                url: $that.getAttrsUrl,
                type: 'post',
                data: postData,
                dataType: 'json',
                success: function (data) {
                    if (data.state == "ok") {
                        $that.attrs = data.attrs;
                        $that.skus = data.skus;
                        if($that.skus.length>1){
                            if ($that.loadAfterEvent) {
                                $that.loadAfterEvent.fireEvent({target:$that.target});
                            }
                        }else{
                            var postData = {objectId: $that.productId,flowType:"normal_add2cart"};
                            postData.skuId = $that.skus[0].id;
                            postData.amount =  $that.num;
                            $.ajax({
                                url: $that.completeUrl,
                                type: 'post',
                                data: postData,
                                success: function (data) {
                                    var msg = "",state = false;
                                    if(data.indexOf("ok")>-1){
                                        msg = "已成功加入购物车";
                                        state = true
                                    }else{
                                        data=JSON.parse(data);
                                        if(!data.state) {
                                            if (data.error_code == "product_not_exist") {
                                                msg = "该商品不存在!";
                                            } else if (data.error_code == "product_off_shelves") {
                                                msg = "该商品已下架!";
                                            } else if (data.error_code == "product_info_wrong") {
                                                msg = "商品销售信息有误!";
                                            } else if (data.error_code == "product_out_of_stock") {
                                                msg = "商品库存不足!";
                                            }else if(data.error_code == "error"){
                                                msg = "超过限购数量";
                                            }else{
                                                msg = "加入购物车失败,未知错误!"+data.error_code;
                                            }
                                        }
                                    }
                                    $that.completeAfterEvent.fireEvent({msg:msg,state:state,target: $that.target});
                                }
                            });
                        }
                    } else {
                        alert(data.msg);
                    }
                }
            });
        };



        $that.selectedSkuId = function(skus){
            if(skus.length==1){
                return skus[0].id;
            }else{
                for(var i=0; i<skus.length; i++){
                    var sku = skus[i];
                    if(!sku.attrs){
                        continue;
                    }
                    var isMatch = true;
                    for(k in sku.attrs){
                        var attrValue = sku.attrs[k];
                        var value = $that.selectedValue[k];
                        if(value!=attrValue){
                            isMatch = false;
                            break;
                        }
                    }

                    if(isMatch){
                        return sku.id;
                    }
                }
            }
            return null;
        };

        $that.setSelectedValue = function (attrId, attrValueId) {
            $that.selectedValue[attrId] = attrValueId;
            $that.showTips();
        };

        $that.reSetSelectedValue = function () {
            $that.selectedValue = {};
        };

        if ($that.attr_container) {
            var $attr_container = $($that.attr_container);

            //标准值单选事件
            var $doClickValue = $(".doClickValue", $attr_container);
            if ($doClickValue && $doClickValue.length > 0) {
                $doClickValue.die();
                $doClickValue.live("click", function () {
                    var $this = $(this);
                    var attrId = $this.attr("attrId");
                    var valueId = $this.attr("valueId");
                    $that.setSelectedValue(attrId, valueId);
                    $that.reShowValues(attrId, valueId);
                });
            }

            //确认事件
            var $doSelectSkuBtn = $(".doSelectSkuBtn", $attr_container);
            if ($doSelectSkuBtn && $doSelectSkuBtn.length > 0) {
                $doSelectSkuBtn.die();
                $doSelectSkuBtn.live("click", function () {
                    var skuId =   $that.selectedSkuId( $that.skus);
                    if (!$that.isSelectedAll()) {
                        alert("请正确选择相应的规格后再点击确认");
                        return;
                    }
                    if(!$that.productId){
                        throw "productId is undefined";
                    }
                    var postData = {id: $that.productId};
                    postData.attrs = $.toJSON($that.selectedValue);
                    if($that.itemId) postData.itemId = $that.itemId;
                    if($that.ruleId) postData.ruleId = $that.ruleId;
                    if($that.cartId) postData.cartId = $that.cartId;
                    postData.skuId = skuId;
                    postData.amount =  $that.num;
                    if($that.oldSelectedSkuId) postData.oldSelectedSkuId = $that.oldSelectedSkuId;
                    $.ajax({
                        url: $that.completeUrl,
                        type: 'post',
                        data: postData,
                        success: function (data) {
                            if(data.indexOf("ok")>-1){
                                $that.completeAfterEvent.fireEvent();
//                                alert("加入购物车成功");
                            }else{
                                data=JSON.parse(data);
                                if(!data.state) {
                                    if (data.error_code == "product_not_exist") {
                                        alert("该商品不存在!");
                                    } else if (data.error_code == "product_off_shelves") {
                                        alert("该商品已下架!");
                                    } else if (data.error_code == "product_info_wrong") {
                                        alert("商品销售信息有误!");
                                    } else if (data.error_code == "product_out_of_stock") {
                                        alert("商品库存不足!");
                                    }else{
                                        alert("加入购物车失败,未知错误!"+data.error_code);
                                    }
                                }

                            }
                        }
                    });
                });
            }
        }
    /*    var $decreaseBtn = $("#decrease", $attr_container);
        $decreaseBtn.live("click", function () {
            var $this = $(this);
            $that.num =$("#num").val();
            $that.num=Number( $that.num)-1;
            if( $that.num==0){
                return;
            }
            $("#num").val( $that.num);

        })
        var $addBtn = $("#add", $attr_container);
        $addBtn.live("click", function () {
            $that.num =$("#num").val();console.log( $that.num);
            $that.num=Number($that.num)+1;
            $("#num").val(  $that.num);

        })

        $that.checknumber=function(strs) {
            var Letters = "1234567890";
            var i;
            var c;
            for (i = 0; i < strs.length; i ++) {
                c = strs.charAt(i);
                if (Letters.indexOf(c) == -1) {
                    return true;
                }
            }
            return false;
        }
        $that.checkBuyForm=function() {
            $that.num =$("#num").val();
            if ( $that.checknumber(   $that.num)) {
                alert("您填写购买的商品数量不是有效的数字");
                $("#num").val(1);
                return false;
            } else {
                if(isNaN( $that.num)){
                    alert("您填写购买的商品数量不是有效的数字");
                    $("#num").val(1);
                    return false;
                }
                if ( $that.num == "0") {
                    alert("购买的商品数量必须大于0");
                    $("#num").val(1);
                    return false;
                }
                if ( $that.num == "999" ||  $that.num.length > 3) {
                    alert("尊敬的客户您订购的数量太多,请您与客服或与商家联系");
                    return false;
                }
            }
            return true;
        }*/
        $that.reShowValues = function (curAttrId, curValueId) {
            var curAttrValue = $that.getAttrValue(curAttrId, curValueId);
            //把与当前选择的标准值不匹配的已选择的标准值去掉选中
            $that.removeNotMatchSelected(curAttrId, curAttrValue);
            var $attr_container = $($that.attr_container);
            var $doClickValue = $(".doClickValue", $attr_container);
            if ($doClickValue) {
                $doClickValue.each(function () {
                    var $this = $(this);
                    var attrId = $this.attr("attrId");
                    var valueId = $this.attr("valueId");

                    $this.removeClass("cur");
                    $this.removeClass("disable");
                    if (curAttrId == attrId) {
                        if (curValueId == valueId) {
                            $this.addClass("cur");
                        } else {
                            if (!$that.isMatchSelected(attrId, valueId)) {
                                $this.addClass("disable");
                            }
                        }
                    } else {
                        var relIds = curAttrValue[attrId + "_relIds"];
                        var isMatch = $that.isMatch(relIds, valueId);
                        var isMatchSelected = $that.isMatchSelected(relIds, valueId);
                        if (isMatch && isMatchSelected) {
                            if ($that.isSelected(attrId, valueId)) {
                                $this.addClass("cur");
                            }
                        } else {
                            $this.addClass("disable");
                        }
                    }
                });
            }
        };

        //把与当前选择的标准值不匹配的已选择的标准值去掉选中
        $that.removeNotMatchSelected = function (attrId, attrValue) {
            for (var key in $that.selectedValue) {
                if (attrId != key) {
                    var value = $that.selectedValue[key];
                    if (value && value != "") {
                        var relIds = attrValue[key + "_relIds"];
                        var isExist = $that.isMatch(relIds, value);
                        if (!isExist) {
                            $that.setSelectedValue(key, "");
                        }
                    }
                }
            }
        };

        //检查当前标准值是否满足其他已经选择的标准，如果不满足，则设置为disable
        $that.isMatchSelected = function (attrId, valueId) {
            for (var key in $that.selectedValue) {
                var value = $that.selectedValue[key];

                if (value && value != "") {
                    var attrValue = $that.getAttrValue(key, value);
                    if (attrValue) {
                        var relIds = attrValue[attrId + "_relIds"];
                        if (relIds) {
                            var isExist = $that.isMatch(relIds, valueId);
                            if (!isExist) {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        };

        $that.isMatch = function (relIds, valueId) {
            var isExist = false;
            if (relIds) {
                var relId = relIds.split(",");
                for (var i = 0; i < relId.length; i++) {
                    if (relId[i] == valueId) {
                        isExist = true;
                    }
                }
            }
            return isExist;
        };

        $that.isSelected = function (attrId, valueId) {
            var value = $that.selectedValue[attrId];
            if (value && value == valueId) {
                return true;
            }
            return false;
        };

        //是否所有购买属性都已选择
        $that.isSelectedAll = function () {
            var selectedSize = 0;
            for (var key in $that.selectedValue) {
                var value = $that.selectedValue[key];
                if (value && value != "") {
                    selectedSize++;
                }
            }
            if (selectedSize == $that.attrs.length) {
                return true;
            }
            return false;
        };

        $that.showTips = function () {
            var html = "";
            for (var key in $that.selectedValue) {
                var value = $that.selectedValue[key];
                if (value && value != "") {
                    if (html == "") {
                        html += $that.getAttrValueName(key, value);
                    } else {
                        html += '，' + $that.getAttrValueName(key, value);
                    }
                }
            }
            html = "您已选择：" + html;
            var $attr_container = $($that.attr_container);
            var $tips = $(".tips", $attr_container);
            if ($tips) {
                $tips.html(html);
            }
        };

        $that.getAttrValueName = function (attrId, valueId) {
            var value = $that.getAttrValue(attrId, valueId);
            if (value) {
                return value.name;
            }
            return "未定义";
        };

        $that.getAttrValue = function (attrId, valueId) {
            if ($that.attrs) {
                for (var i = 0; i < $that.attrs.length; i++) {
                    var attr = $that.attrs[i];
                    if (attr.id == attrId) {
                        var values = attr.values;
                        if (values) {
                            for (var j = 0; j < values.length; j++) {
                                var value = values[j];
                                if (value.id == valueId) {
                                    return value;
                                }
                            }
                        }
                    }
                }
            }
            return undefined;
        };


    }
})(jQuery);  