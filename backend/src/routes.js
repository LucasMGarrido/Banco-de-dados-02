const { Router } = require('express');
const routes = Router();
const noteController = require('./controllers/noteController')

routes.get('/dev', (req, res) => {
    return res.status(200).json({ mensagem: "Server funcionando" });
})

routes.post('/notes', noteController.store);
routes.get('/notes', noteController.index);
routes.get('/notes/:id', noteController.show);
routes.put('/notes/:id', noteController.update);
routes.delete('/notes', noteController.destroy);

module.exports = routes;