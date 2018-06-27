var gulp = require('gulp');
var sass = require("gulp-sass");
var cleanCss = require('gulp-clean-css');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

//复制文件
gulp.task('copy-index',function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	return gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
 });
 

//拷贝图片
var gulp = require('gulp'); 
gulp.task('images',function(){ 
     return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'))
 }); 


//多个任务一起执行
gulp.task('build',['copy-index','images','data'],function(){
	 console.log('编译成功');
 }) 
 

//侦测文件变化
gulp.task('watch',function(){
	 gulp.watch('../MyProject',['copy-index']); 
	 gulp.watch('images/**/*.{jpg,png}',['images']); 
	 gulp.watch(['xml/*.xml','json/*.json','!json/secret.json'],['data']);
	 gulp.watch('stylesheets/**/*.scss',["sass"]);
 }) 


//创建scss文件
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
     gulp.src('stylesheets/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    //.pipe(cleanCss())
    .pipe(gulp.dest('css'));
});

//Watching Sass files for changes




//gulp-connect插件搭建本地服务
gulp.task('server',function(){ 
	connect.server({
					root:'../MyProject',
					livereload:true	
					});
})  

//网页同步刷新
gulp.task('default',['server','watch']);


//合并js文件并进行压缩
gulp.task('scripts',function(){ 
	return gulp.src(['js/avalon.js','js/index.js']) 
	.pipe(concat('vendor.js')) 
	.pipe(uglify())
	.pipe(gulp.dest('dist/js')); 
}) 


 