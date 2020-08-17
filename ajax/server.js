const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/teste', (req,res) => res.send('OK'))

const multer = require('multer')

//diskStorage, configura/personalisa a pasta onde serão salvos os arquivos
//personaliza os nomes dos arquivos no momento de salvar eles
const storage = multer.diskStorage({
    //chama a callback passando a pasta de destino do arquivo
    destination: function (req, file, callback){
        callback(null, './upload')
    },
    //chama a callback passando o nome de arquivo padrão que será utilizado para formar o nome do arquivo
    filename: function(req, file, callback){
        //nesse caso usa usando o nome original com a data atual como prefixo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
//upload recebe o objeto storage e recebe um arquivo que vem na requisição com o nome arquivo
const upload = multer({storage}).single('arquivo')
//requisição para fazer o upload do arquivo via post
app.post('/upload',(req,res) =>{
    //chamando a função upload
    upload(req,res,err => {
        if(err){
            //retorno caso haja um erro
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso.')
    })
})
//recebendo dados do formulario
app.post('/formulario', (req, res) => {
    //retornando os dados recebidos
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req,res) => {
    //formas de receber dados do front end
    // req.body
    // req.query
    // req.param
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
app.listen(8080, () => console.log('Executanto...'))