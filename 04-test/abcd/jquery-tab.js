/**
 *
 * Created by ChengXiancheng on 2017/3/23.
 */

jQuery.fn.extend({tab:function(data){     return this.each(function(){     var dom=this;//dom就是每一个tab栏的父容器
            var $container = $("<div></div>")     .addClass("tab-container")
                .append("<div class='tab-header'></div><div class='tab-content'></div>");

            $.each(data,function(i,singleData){
                $container
                    .find(".tab-header").append("<div>"+singleData.title+"</div>")
                    .end()
                    .find(".tab-content").append("<div>"+singleData.content+"</div>");
            });
            //默认选中第一个标题和第一个内容
            $container.find(".tab-header div:eq(0),.tab-content div:eq(0)").addClass("current");


            //1、将它追加到父元素中 2、将它赋值给$container属性
            $container.appendTo(dom);

            //绑定事件：.......
        })


    }
});

$("div").tab();