# Gulp
## npm(node package manager)
### 基本介绍：
1. 官网 https://www.npmjs.com
2. npm:node package manager：Node包管理器
3. npm中管理了很多前端以及后端(nodejs)使用到的一些框架、库，比如：jquery/angular等等
4. npm集成在node中，只需要安装node既可以安装NPM

### npm下载指定的框架/库文件
1. 找到需要安装的目录
2. 使用命令行(cmd/powershell)打开
3. 输入命令：npm init 进行一系列初始化操作，之后会在该目录生成一个package.json文件
4. 安装指定的包：npm install 包名 `[--save]`
    1. 举例：npm install jquery
    2. 如果输入了--save，则会在package.json文件的dependencies属性中保存安装的包，这样做的好处：别人只需要拿到package.json文件，通过执行命令：npm install --production就可以将dependencies中的包下载下来

### npm删除指定的包：npm remove 包名 `[--save]`

## gulp基本介绍
gulp是一款前端自动化工具，可以实现代码压缩、代码混淆、文件合并等操作，相关的工具还有：grunt/webpack，但是gulp跟他们对比操作更加简单灵活

## 安装gulp
命令：npm install gulp-cli -g
说明：gulp-cli是gulp安装的包名
-g表示全局安装，全局安装表示在电脑的任意位置都可以使用，全局安装会将它安装到以下目录：C:\Users\用户\AppData\Roaming\npm\node_modules
    - 安装成功：gulp -v :查看CLI的版本号

使用时还需要在项目中通过npm非全局安装gulp：
npm install gulp --save-dev

--save-dev：gulp将会出现在package.json文件的devDependencies属性中

## 使用gulp完成文件复制的功能
1. 在需要复制的目录中，新建一个gulpfile.js文件
2. 在gulpfile.js文件中编写代码：
    1. var gulp =require("gulp");
    2. 创建一个任务：
        gulp.task("copyfile",function(){
            //任务中做的事情
            3. 见第3步
        })
    3. gulp.src("./1.js").pipe(gulp.dest("文件输出到指定的目录地址"))

## 使用gulp实现JS代码压缩：
1. 在网站工作目录中，新建一个gulpfile.js文件
2. 安装gulp-uglify：npm install gulp-uglify --save-dev
3. 在gulpfile.js文件中编写代码：
    1. var gulp =require("gulp");
    2. var uglify=require("gulp-uglify");
    2. 创建一个任务：
        gulp.task("copyfile",function(){
            //任务中做的事情
            gulp.src("./1.js")
                .pipe(uglify())
                .pipe(gulp.dest("文件输出到指定的目录地址"))
        });

## gulp插件
 对代码进行合并 gulp-concat
 对css进行压缩 gulp-cssnano
 对html进行压缩 gulp-htmlmin

## 备注：
+ 在使用gulp读取文件的时候，如果路径含有中文，那么一定要注意检查gulpfile.js文件的编码，让它变成UTF8