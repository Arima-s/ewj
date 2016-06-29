/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

    "use strict"; // jshint ;_;


    /* TYPEAHEAD PUBLIC CLASS DEFINITION
     * ================================= */

    var Typeahead = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, $.fn.typeahead.defaults, options)
        this.matcher = this.options.matcher || this.matcher
        this.sorter = this.options.sorter || this.sorter
        this.highlighter = this.options.highlighter || this.highlighter
        this.updater = this.options.updater || this.updater
        this.source = this.options.source
        this.$menu = $(this.options.menu)
        this.shown = false
        this.listen()
    }

    Typeahead.prototype = {

        constructor: Typeahead

        , select: function () {
            var val = this.$menu.find('.active').attr('data-value')
            if (val.length > 0) {
                this.$element
                    .val(this.updater(val))
                    .change()
                $("#search_form").submit()
            } else {
                //val = $(this.$menu.find("li")[0]).attr('data-value')
            }
            return this.hide()
        }

        , updater: function (item) {
            return item
        }

        , show: function () {
            var pos = $.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            })

            this.$menu
                .insertAfter(this.$element)
                .css({
                    top: pos.top + pos.height
                    , left: pos.left
                })
                .show()

            this.shown = true
            return this
        }

        , hide: function () {
            this.$menu.hide()
            this.shown = false
            return this
        }

        , lookup: function (event) {
            var items

            this.query = this.$element.val()

            if (!this.query || this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this
            }

            items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

            return items ? this.process(items) : this
        }

        , process: function (items, right, recommend_num) {
            var that = this

            //items = $.grep(items, function (item) {
            //  return that.matcher(item)
            //})
            //debugger;
            //items = this.sorter(items)

            if (!items.length) {
                return this.shown ? this.hide() : this
            }

            return this.render(items.slice(0, this.options.items), right, recommend_num).show()
        }

        , matcher: function (item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase())
        }

        , sorter: function (items) {
            var beginswith = []
                , caseSensitive = []
                , caseInsensitive = []
                , item

            while (item = items.shift()) {
                if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
                else if (~item.indexOf(this.query)) caseSensitive.push(item)
                else caseInsensitive.push(item)
            }

            return beginswith.concat(caseSensitive, caseInsensitive)
        }

        , highlighter: function (item) {

            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>'
            })
        }

        , render: function (items, right, recommend_num) {
            var that = this
            for (var i = 0; i < right.length; i++) {
                if (items[i] == "" && right[i] == "") {
                    items.splice(i, 1);
                    right.splice(i, 1);
                    recommend_num--;
                    i--
                }
            }
            var rightCount = 0;
            items = $(items).map(function (i, item) {
                i = $(that.options.item).attr('data-value', item)
                //i.find('a').html(that.highlighter(item))
                //debugger
                var ristr = right.length > 0 && rightCount < right.length ? right[rightCount] : "";
                if (++rightCount == recommend_num) {
                    $(i[0]).css("border-bottom", "1px solid rgb(206, 203, 203)");
                    //var aEvent = document.createElement("a");
                    //aEvent.appendChild($(i[0]).css("border-bottom", "1px solid rgba(86, 83, 83, 0.47)").get(0));
                    //ristr = $(aEvent).html();
                }
                i[0].innerHTML = "<a>" +
                that.highlighter(item) +
                "<span style='margin-left: 10px'></span>" +
                ristr +
                '</a>';
                return i[0]
            })

            items.first().addClass('active')
            this.$menu.html(items)


            return this
        }

        , next: function (event) {
            var active = this.$menu.find('.active').removeClass('active')
                , next = active.next()

            if (!next.length) {
                next = $(this.$menu.find('li')[0])
            }

            next.addClass('active')
        }

        , prev: function (event) {
            var active = this.$menu.find('.active').removeClass('active')
                , prev = active.prev()

            if (!prev.length) {
                prev = this.$menu.find('li').last()
            }

            prev.addClass('active')
        }

        , listen: function () {
            this.$element
                .on('focus', $.proxy(this.focus, this))
                .on('blur', $.proxy(this.blur, this))
                .on('keypress', $.proxy(this.keypress, this))
                .on('keyup', $.proxy(this.keyup, this))

            if (this.eventSupported('keydown')) {
                this.$element.on('keydown', $.proxy(this.keydown, this))
            }

            this.$menu
                .on('click', $.proxy(this.click, this))
                .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
                .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
        }

        , eventSupported: function (eventName) {
            var isSupported = eventName in this.$element
            if (!isSupported) {
                this.$element.setAttribute(eventName, 'return;')
                isSupported = typeof this.$element[eventName] === 'function'
            }
            return isSupported
        }
        , moveUpdate: function () {
            var val = this.$menu.find('.active').attr('data-value')
            if (val.length > 0) {
                this.$element
                    .val(this.updater(val))
                    .change()
            }
        }

        , move: function (e) {
            if (!this.shown) return
            switch (e.keyCode) {
                case 9: // tab
                case 13: // enter
                case 27: // escape
                    e.preventDefault()
                    break

                case 38: // up arrow
                    e.preventDefault()
                    this.prev()
                    this.moveUpdate()
                    break

                case 40: // down arrow
                    e.preventDefault()
                    this.next()
                    this.moveUpdate()
                    break
            }

            e.stopPropagation()
        }

        , keydown: function (e) {
            this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27])
            this.move(e)
        }

        , keypress: function (e) {
            if (this.suppressKeyPressRepeat) return
            this.move(e)
        }

        , keyup: function (e) {
            switch (e.keyCode) {
                case 40: // down arrow
                case 38: // up arrow
                case 16: // shift
                case 17: // ctrl
                case 18: // alt
                    break

                case 9: // tab
                case 13: // enter
                    if (!this.shown) return
                    this.select()
                    break

                case 27: // escape
                    if (!this.shown) return
                    this.hide()
                    break

                default:
                    this.lookup()
            }

            e.stopPropagation()
            e.preventDefault()
        }

        , focus: function (e) {
            this.focused = true
        }

        , blur: function (e) {
            this.focused = false
            if (!this.mousedover && this.shown) this.hide()
        }

        , click: function (e) {

            //e.stopPropagation()
            //e.preventDefault()

            this.select()
            this.$element.focus()
        }

        , mouseenter: function (e) {
            this.mousedover = true
            this.$menu.find('.active').removeClass('active')
            $(e.currentTarget).addClass('active')
        }

        , mouseleave: function (e) {
            this.mousedover = false
            if (!this.focused && this.shown) this.hide()
        }

    }


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    var old = $.fn.typeahead

    $.fn.typeahead = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('typeahead')
                , options = typeof option == 'object' && option
            if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.typeahead.defaults = {
        source: []
        , items: 8
        , menu: '<ul class="typeahead dropdown-menu"></ul>'
        , item: '<li><a href="#"></a></li>'
        , minLength: 1
    }

    $.fn.typeahead.Constructor = Typeahead


    /* TYPEAHEAD NO CONFLICT
     * =================== */

    $.fn.typeahead.noConflict = function () {
        $.fn.typeahead = old
        return this
    }


    /* TYPEAHEAD DATA-API
     * ================== */

    $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
        var $this = $(this)
        if ($this.data('typeahead')) return
        $this.typeahead($this.data())
    })

}(window.jQuery);

$.fn.jsonSort = function (sortby) {
    var json = this;
    if (!json || typeof json !== "object" || json.length == 0) {
        return [];
    }
    json = json[0];
    var names = [];
    var values = [];
    var reobj = {};
    $.map(json, function (a, b) {
        values.push(a[sortby]);
        names.push(b);
    });
    var arr = $(values);
    arr.sort(function (a, b) {
        return b - a
    });
    for (var i in arr) {
        var index = $.inArray(arr[i], values);
        if (index > -1 && arr[i]) {
            reobj[names[index]] = {};
            reobj[names[index]][sortby] = arr[i];
            values[index] = "";
        }
    }
    return reobj;
};
$.searchTypeaheads = function (element, options) {
    var getCategoryCount = function (categorys, toIndex) {
        toIndex = toIndex || defaults.recommend_num - 1;
        var count = 0;
        for (var index in categorys) {
            if (index == toIndex)break;
            var cate = categorys[index];
            if (cate instanceof Array) {
                count += parseInt(cate[cate.length - 1]['count'])
            } else {
                count += parseInt(cate['count'])
            }
        }
        return count;
    };
    var wordProcess = function (word) {
        return word;
    };
    var categoryProcess = function (word, category) {
        var html = "<button type='button' class='btn btn-link' style='padding: 0 0 0 0;'" +
            "onclick=\"window.location.href='/product_list.jsp?" +
            "keyword=" + encodeURI(word) +
            "&columnId=" + category[category.length - 1]["ID"] +
            "'\">" + "<small>在";
        var categoryList = "";
        for (var index in category) {
            categoryList += category[index]['name'] + ">";
        }
        categoryList = "<strong style='color: #E45858;'>" + categoryList.substring(0, categoryList.length - 1) + "</strong>";
        html +=
            categoryList +
            "分类下搜索</small>" + "</button>";
        return html;
    };
    var productCountProcess = function (count) {
        var html =
            "<button type='button' class='btn btn-link' style='padding: 0 0 0 0;float: right;'>" +
            "<small>" + "约" + count + "个商品</small>" +
            "</button>";
        return html;
    };

    var success = function (res, process) {

        if (res.length == 0) {
            return [];
        }
        var categorySort = function (a, b) {
            return b[b.length - 1].count - a[a.length - 1].count
        };
        var wordList = [], categoryList = [];
        var category = res[0]['category_store'];
        category.sort(categorySort);
        wordList.push(defaults.wordProcess(res[0].id));
        categoryList.push(defaults.productCountProcess(getCategoryCount(category, category.length)));
        for (var i = 1; i < defaults.recommend_num + 1; i++) {
            wordList.push("");
            if (i - 1 < res[0].category_store.length) {
                categoryList.push(
                    defaults.categoryProcess(wordList[0], res[0].category_store[i - 1]) +
                    defaults.productCountProcess(getCategoryCount(category[i - 1], 1))
                )
            } else {
                categoryList.push("")
            }
        }
        for (var i = 1; i < res.length; i++) {
            category = res[i]['category_store'];
            wordList.push(defaults.wordProcess(res[i].id));
            categoryList.push(
                defaults.productCountProcess(getCategoryCount(category, category.length))
            )
        }
        process(wordList, categoryList, defaults.recommend_num + 1);
    };

    var source = function (query, process) {
        var keyword = $.trim(query);
        if (keyword.length <= 0)return;
        if (keyword.indexOf("*") > -1)return;
        $.post("/searchSmart/serverHandler/typeAhead/getWords.jsx", {
            keyword: keyword,
            rows: defaults.listRows
        }, function (res) {
            defaults.success(res, process)
        }, "json")
    };

    var defaults = {
        listRows: 5,                        //获取词条数
        success: success,                   //数据被get到本地时
        wordProcess: wordProcess,
        categoryProcess: categoryProcess,
        productCountProcess: productCountProcess,
        recommend_num: 3                   //推荐数量
    };

    defaults = $.extend({}, defaults, options);
    $(element).typeahead({
        menu: '<ul class="typeahead dropdown-menu" style="width: 100%"></ul>',
        source: source
    })
};

