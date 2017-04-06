/**
 *
 * Created by ChengXiancheng on 2017/3/23.
 */

//$.each:遍历数组、伪数组、普通的对象
//$.fn.each：遍历jquery对象中的每一个DOM元素

//$.type：判断参数的数据类型，传入一个数据，返回数据类型名称的小写格式
//      //只能实现判断内置对象的类型-->不能判断自定义构造函数创建的对象类型

//$.error：抛出一个异常
//$.extend
//      参数个数为1：将参数中的属性和方法分别拷贝到$函数中
//      参数个数>1：将第二个参数及其后面的所有的参数中的属性和方法拷贝到第一个参数中

//$.fn.extend
//      参数个数为1：将参数中的属性和方法拷贝到$.fn中
//      参数个数>1：将第二个参数及其后面的所有的参数中的属性和方法拷贝到第一个参数中

//$.trim：去除字符串的首尾空格

//$.merge：合并2个数组、伪数组

//$.makeArray：将参数转换为真数组
//      1、参数是一个伪数组(isLikeArray)，将伪数组里面的元素合并到一个真数组中，返回真数组
//      2、参数是其他情况，直接用：[参数]


//$.fn.css
//      参数个数为1：
//              参数是字符串类型：获取第一个DOM元素的指定样式 $("div").css("color")
//              参数是其他类型，设置每一个DOM元素的多个样式  $("div").css({color:"red"})
//      参数个数>1：
//              设置每一个DOM元素的单个样式：$("div").css("fontSize","30px")

//$.fn.show：让每一个元素显示出来
//$.fn.hide：让每一个元素隐藏起来
//$.fn.toggle：判断每一个DOM元素，如果该元素是隐藏的，就显示，反之就隐藏

//$.fn.appendTo：将当前对象中的每一个DOM元素尾部追加到指定的父容器中：$("<input/>").appendTo("div")
//$.fn.append：给当前对象中的每一个DOM元素尾部追加子元素 $("div").append("<input/>")

//$.fn.prependTo：将当前对象中的每一个DOM元素头部追加到指定的父容器中：$("<input/>").prependTo("div")
//$.fn.prepend：给当前对象中的每一个DOM元素头部追加子元素 $("div").prepend("<input/>")

//$.fn.get()
//      不传参：将当前对象中的每一个DOM元素转换为真数组返回
//      传递的参数值>=0：返回指定索引的DOM元素
//      传递的参数值<0：返回倒数第几个元素

//$.fn.first：返回由第一个DOM元素组成的jquery对象

//$.fn.last：返回由最后一个DOM元素组成的jquery对象

//$.fn.eq：返回由指定索引的DOM元素组成的jquery对象

//$.fn.find：查找当前对象中的每一个DOM元素下面的满足指定条件的DOM元素的集合
//      $("div").find("input")：找到所有的div下面的所有的input

//$.fn.remove：将当前对象中的每一个DOM元素从页面中移除
//      $("div").remove();

//$.fn.before：在当前对象中的DOM元素之前插入指定的元素
//      $("div").before("<input/>")：将input插入到div之前

//$.fn.after：在当前对象中的DOM元素之后插入指定的元素
//      $("div").after("<input/>")：将input插入到div之后

//$.fn.siblings：找到当前对象的DOM元素的所有的兄弟元素的集合
//      也可以传递参数，找到满足指定条件的兄弟元素

//$.fn.next：找到当前对象的DOM元素的下一个兄弟元素(过滤掉文本、注释节点)
//      也可以传递参数，找到满足指定条件的下一个兄弟元素

//$.fn.html：
//      传参：设置每一个DOM元素的指定的内容(innerHTML)
//      不传参：获取第一个DOM元素的指定内容

//$.fn.text：
//      传参：设置每一个DOM元素的指定的文本(innerText)
//      不传参：获取所有的DOM元素的文本的总和


//$.fn.attr
//      参数个数为1：
//              参数是字符串类型：获取第一个DOM元素的指定属性 $("div").attr("id")
//              参数是其他类型，设置每一个DOM元素的多个属性  $("div").attr({tag:"100"})
//      参数个数>1：
//              设置每一个DOM元素的单个属性：$("div").attr("tag","200")

//$.fn.prop：
//      参数个数为1：
//              参数是字符串类型：获取第一个DOM元素的指定属性 $("div").prop("id")
//              参数是其他类型，设置每一个DOM元素的多个属性  $("div").prop({tag:"100"})
//      参数个数>1：
//              设置每一个DOM元素的单个属性：$("div").prop("tag","200")

//===================attr和prop的比较========================
//1、attr操作属性通过getAttribute/setAttribute完成；prop通过对象属性来完成
//2、attr设置的属性一定会映射到页面中，
//          prop有时候会映射，比如id/type/width/height；
//          有时候不会映射，比如自定义属性；
//          有时候变一种方式映射：className-->class  checked/disabled/selected-->布尔值到页面中是字符串的值
//3、attr和prop操作属性的时候不要交叉使用

//$.fn.removeAttr/$.fn.removeProp：移除每一个DOM元素的指定属性

//$.fn.hasClass：查找当前对象中的DOM元素是否存在指定的类名，如果有一个存在就返回true；如果一个都没有返回false

//$.fn.addClass：为每一个DOM元素添加一个或者多个类名

//$.fn.removeClass：为每一个DOM元素移除一个或者多个类名

//$.fn.toggleClass：切换类名，对每一个DOM元素判断是否存在指定类名，存在就移除，不存在就添加

//$.fn.val：
//      传参：设置每一个DOM元素的值
//              input标签：设置value
//              radio/checkbox：如果设置的值与本身的value相等，就选中
//              option:设置value值
//              select：选中与设置的值匹配的那个option
//                      如果一个都不匹配，取消选中所有(select.selectedIndex=-1)

//      不传参：获取第一个DOM元素的值

//      DOM元素的值：
//          1、input标签，直接返回value属性的值
//          2、option标签；如果有value就返回value，反之返回文本
//          3、select标签：对于单选，返回value的值(选中的option的值)
//                      对于多选：返回所有的选中的option的值组成一个数组


//$.fn.on：为每一个DOM元素绑定指定的事件

//$.fn.off：为每一个DOM元素解绑指定的事件