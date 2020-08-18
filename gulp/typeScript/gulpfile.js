const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
//arquivo de configuração que o compilador de typescript vai usar
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    //o caminho ja esta sendo informado em tsProject
    return tsProject.src()
        //processo de compilação do TS
        .pipe(tsProject())
        
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)