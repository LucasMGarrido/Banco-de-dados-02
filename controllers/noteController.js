const noteModel = require('../models/noteModel');


class noteController{
    async store(req, res){ //cria o nota
        try{
            const newNote = req.body;

            if(!newNote){
                return res.status(404).json({ mensagem: "Notas vazias não são aceitas" })
            }
            const createdNote = await noteModel.create(newNote);

            return res.status(200).json(createdNote);
        }catch(error){
            return res.status(404).json({ mensagem: "Erro na criação" });
        }
    }

    async index(req, res){ //listar os produtos
        const notes = await noteModel.find();

        return res.status(200).json({ notes });
    }

    async show(req, res){ //listar um produto específico
        try{

            const result = await noteModel.aggregate([
                {
                  '$search': {
                    'index': 'search-text',
                    'text': {
                      'query': req.query.title,
                      'path': {
                        'wildcard': '*'
                      }
                    }
                  }
                }
            ]);

            if(!result){
              return res.status(404).json({ mensagem: "A nota não existe" });
            }else{
              return res.status(200).send(result);
            }
        }catch(error){
            return res.status(404).json({ mensagem: "título inválido" })
        }
    }

    async updateeee(req, res){ //atualiza o produto
        try{
            const { id } = req.params;

            await noteModel.replaceOne({title:req.params.title}, req.body);

            return res.status(200).json({ mensagem: "Nota atualizada" })
        }catch(error){
            return res.status(404).json({ mensagem: "Erro de atualização" })
        }
    }

    async destroy(req, res){ //deleta o produto
        try{
            
            const note = req.body;

           const noteDeleted = await noteModel.deleteOne(note);

            if(!noteDeleted){
                return res.status(404).json({ mensagem: "A nota não existe" });
            }else{
                return res.status(200).json({ mensagem: "Nota deletada" });
            }
        }catch(error){
            return res.status(404).json({ mensagem: "Não foi possível deletar" });
        }

    }

    async ler (req, res){
        const items = await noteModel.find()
    
        res.render('../views/front.ejs', {items : items})
    }


    async update (req, res) {
        const id = req.params.id
        const nota = {
            title: req.body.title,
            content: req.body.content
        }
        const notaAtualizada = await noteModel.findByIdAndUpdate(id, nota)
        console.log(id, nota)

        res.redirect('/dev')
    }


    async deletar (req, res) {
        const id = req.params.id
        await noteModel.findByIdAndDelete(id)
        res.redirect('/dev');
    }
    

    async pesquisar (req, res) {
        const texto = req.body.txtPesquisa
        console.log(texto)
        const items = await noteModel.find({title:{query: texto}, content:{query: texto}})
        console.log(items)
        res.render('../views/front.ejs', {items : items})
    }


}

    

module.exports = new noteController;