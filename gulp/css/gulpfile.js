const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        //Pega todo o sass e converte para css
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments":true}))
        //faz a concatenação dos arquivos
        .pipe(concat('estilo.min.css'))
        //manda o arquivo gerado para o destino
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}
exports.default = series(transformacaoCSS,copiarHTML)