//peerDependencies

//webpack docs
const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('serve:before', ['default']);

gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack({
      // Any configuration options...
    }))
    .pipe(gulp.dest('dist/'));
});

//gulp docs
function defaultTask(cb) {
  // place code for your default task here
  
  


  cb();
}

exports.default = defaultTask