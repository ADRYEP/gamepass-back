import express from 'express';
import genreController from '../controllers/genreController.js'

const genre = new genreController()

const genreRoutes = express.Router({
    strict: true
});

genreRoutes.get('/', async (req, res) => {
    res.send(await genre.getAll())
})

genreRoutes.get('/:name', async (req,res) => {
    var name = req.params.name
  
    res.send(await genre.getGenreByName(name))
})

genreRoutes.post('/', async (req,res) => {
    var name = req.body.name
    
    console.log(req.body);
  
    res.send(await genre.createGenre(name))
  })
  
genreRoutes.delete('/:name', async (req,res) => {
var name = req.params.name

res.send(await genre.deleteGenre(name))
})

genreRoutes.get('/game/:name', async (req,res) => {
    var name = req.params.name
    
    res.send(await genre.getGenresGames(name))
  })

export default genreRoutes