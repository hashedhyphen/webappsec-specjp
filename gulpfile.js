const gulp  = require('gulp');
const path  = require('path');
const spawn = require('child_process').spawn;
const sync  = require('browser-sync').create();

gulp.task('watch', () => {
  return gulp.watch('./**/*.bs', (ev) => {
    spawn('bikeshed', ['-f', 'spec'], {
      cwd: path.dirname(ev.path),
      stdio: 'inherit'
    });
  });
});

gulp.task('server', () => {
  sync.init({
    server: "./",
    notify: false
  });
  sync.watch("./**/*.html").on('change', sync.reload);
});

gulp.task('default', ['server', 'watch']);
