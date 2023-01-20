const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/noteController')
const app = express()
const path = require('path')


routes.get('/', (req, res) => res.redirect('/dev'))

routes.get('/dev', noteController.ler)
routes.delete('/deletar/:id', noteController.deletar);
routes.get('/buscar/:texto', noteController.pesquisar);
routes.put('/atualizar/:id', noteController.update);
routes.get('/edit/atualizar/:id', noteController.renderizarPagina);



routes.post('/notes', noteController.store);
routes.get('/notes', noteController.index);
routes.get('/notes/:id', noteController.show);
//routes.put('/notes/:id', noteController.update);
//routes.delete('/notes', noteController.destroy);

module.exports = routes;

/*
<ion-icon name="search-outline"></ion-icon>
                        <input type="text" name="buscar" placeholder="Buscar" />
*/