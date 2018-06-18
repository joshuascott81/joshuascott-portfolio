let gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  browserSync = require('browser-sync').create();

// gulp.task('default', function() {

// })

// gulp.task('html', () => {
//     console.log("HTML task")
// })

gulp.task('styles', () => {
  return gulp
    .src('./assets/css/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
  browserSync.init({
    // server: {
    //     baseDir: "./"
    // },
    proxy: 'localhost:5000'
  });

  // watch('./index.handlebars', () => {
  //     gulp.start('html');
  // })

  watch('./**/*.css', () => {
    gulp.start('styles', () => {
      browserSync.reload();
    });
  });

  watch('./**/*.ejs', () => {
    browserSync.reload();
  });

  watch('./**/*.js', () => {
    browserSync.reload();
  });
});
