const noteModel = require('../models/noteModel');


class noteController{
    async ler (req, res){
        const items = await noteModel.find()

        res.render('../views/front.ejs', {items : items})
    }

    async deletar (req, res) {
        const id = req.params.id
        await noteModel.findByIdAndDelete(id)
        res.redirect('/dev');
    }

    async pesquisar (req, res) {
        const pesquisa = req.params.texto

        const items = await noteModel.find({$text:{$search:pesquisa}}, {score:{$meta:'textScore'}})

        res.render('../views/front.ejs', {items : items})
    }

    async renderizarPagina (req, res){

        const id = req.params.id

        const items = await noteModel.findById(id)
        res.render('../views/edit.ejs', {items})
    }

    async update (req, res) {
        const id = req.params.id
        const nota = {
            title: req.body.title,
            content: req.body.content
        }
        await noteModel.findByIdAndUpdate(id, nota)

        res.redirect('/dev')
    }

}



module.exports = new noteController;