const gulp = require('gulp')
const {series,parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa 2!')
    return cb()
}

function copiar(cb){
    //seleciona os arquivos que serão usados como parametro para o workflow
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    //aplica transformaçoes nos arquivos definidos como parametro
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
)