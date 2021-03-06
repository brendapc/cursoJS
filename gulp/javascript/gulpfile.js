const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false, /* comentarios não serão transferidos */
        presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))

    return cb()
}
function fim(cb){
   console.log('o return pode ficar aqui!')
   
   return cb()
}
exports.default = series(padrao, fim)

