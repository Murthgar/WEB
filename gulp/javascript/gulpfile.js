const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
    //filtrando os arquivos .js em src
    return gulp.src('src/**/*.js')
        //passando objeto de configuração para o babel
        .pipe(babel({
            //os arquivos de comentarios não serão transferidos para o final
            comments:false,
            //vai usar a versão mais nova do javascript
            presets:["env"]
        }))
        //pegar o codigo todo formato e colocar em uma linhá só
        .pipe(uglify())
        //catpura algum tipo de erro
        .on('error', err => console.log(err))
        //concatena o resultado do uglify e coloca em um arquivo
        .pipe(concat('codigo.min.js'))
        //informa a pasta de destino
        .pipe(gulp.dest('build'))
    //return cb()
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

exports.default = parallel(transformacaoJS, fim)