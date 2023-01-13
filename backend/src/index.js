const db = require('./loaders/mongoose.js')
const express = require('express');
const routes = require('./routes');
const app = express();
const Notas = require('./models/noteModel')

//Conectar banco de dados
db()

//Chamando a rota
app.use(express.json());
app.use(routes);


//Adicionando anotação ao banco de dados
app.use(express.urlencoded({extended: true}))

app.post('/dev', async(req, res) => {
    //const titulo = req.body.tituloadd
    //const anotacao = req.body
    //console.log(anotacao)

    const anotacao = new Notas(req.body)
    await anotacao.save()
    res.redirect('/')
})

//app.use('view engine' , 'ejs')

//Listando a porta.
app.listen(3000, () => console.log('Server em funcionamento - http://localhost:3000'));

