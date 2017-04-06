/**
 *
 * Created by ChengXiancheng on 2017/3/23.
 */

var gulp =require("gulp");

//task第一个参数：任务名称 第二个参数：回调函数（任务中要做的事情）

//拷贝目录下的指定文件
gulp.task("copy",function(){
    gulp.src("../03-jquery插件/jquery-tab.js")
        .pipe(gulp.dest("./abc"));
});

//拷贝目录下的所有文件
gulp.task("copy2",function(){
    gulp.src("../03-jquery插件/*")
        .pipe(gulp.dest("./abcd"));
});

//拷贝目录下的所有js文件
gulp.task("copy3",function(){
    gulp.src("../03-jquery插件/*.js")
        .pipe(gulp.dest("./abcde"));
});