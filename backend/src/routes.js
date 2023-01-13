const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/noteController')
const app = express()
const path = require('path')

app.set('view engine' , 'ejs')

routes.get('/', (req, res) => res.redirect('/dev'))

routes.get('/dev', (req, res) => {
    res.render(path.join(__dirname + '/front.ejs'))
})

routes.post('/notes', noteController.store);
routes.get('/notes', noteController.index);
routes.get('/notes/:id', noteController.show);
routes.put('/notes/:id', noteController.update);
routes.delete('/notes', noteController.destroy);

module.exports = routes;