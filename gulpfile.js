const gulp   = require('gulp');
const path   = require('path');
const spawn  = require('child_process').spawn;
const server = require('gulp-webserver');

gulp.task('watch', () => {
  return gulp.watch('./**/*.bs', (ev) => {
    spawn('bikeshed', ['-f', 'spec'], {
      cwd: path.dirname(ev.path),
      stdio: 'inherit'
    });
  });
});

gulp.task('server', () => {
  return gulp.src('./')
  .pipe(server({ port: 9000, livereload: true }));
});

gulp.task('default', ['server', 'watch']);
