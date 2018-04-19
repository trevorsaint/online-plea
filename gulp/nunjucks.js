const gulp = require('gulp')
const nunjucks = require('gulp-nunjucks-render')
const changed = require('gulp-changed')


// Nunjucks --------------------------------------------
// Render nunjucks templates into html files.
// -----------------------------------------------------

gulp.task('nunjucks', () => {
  return gulp.src('app/views/*.nunjucks')
    .pipe(nunjucks({
      path: [
        'node_modules/govuk_template_jinja/views/layouts',
        'app/views',
        'app/views/layout',
        'app/views/macros',
        'app/views/partials'
      ]
    }))
    .pipe(changed('public'))
    .pipe(gulp.dest('public'))
})
