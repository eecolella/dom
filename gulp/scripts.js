//gulp-size
//gulp-uglify
module.exports = function (gulp, $) {

	return gulp.src($.path.src.scripts() + '*.js')
		.pipe($.uglify())
		.pipe(gulp.dest($.path.dist.scripts()))
		.pipe($.size({
			showFiles: true,
			gzip     : true
		}))
		.pipe($.size({
			showFiles: true,
			gzip     : false
		}));

};