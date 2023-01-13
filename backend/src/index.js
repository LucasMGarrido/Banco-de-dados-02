const db = require('./loaders/mongoose.js')
const express = require('express');
const routes = require('./routes');
const app = express();

//Conectar banco de dados
db()

//Chamando a rota
app.use(express.json());
app.use(routes);


//app.use('view engine' , 'ejs')

//Listando a porta.
app.listen(3000, () => console.log('Server em funcionamento - http://localhost:3000'));

