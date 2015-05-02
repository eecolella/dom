//gulp-watch
//browser-sync
module.exports = function (gulp, $) {

	$.browserSync({
		notify: false, // Don't show any notifications in the browser.
		port  : 9000,
		server: {
			baseDir: [$.path.test(), $.path.src()]
		}
	});

	$.watch([
		$.path.test.spec() + '**/*.js',
	], $.browserSync.reload);

};