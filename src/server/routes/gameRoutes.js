import express from 'express';
import gameController from '../controllers/gameController.js'

const game = new gameController()

const gameRoutes = express.Router({
    strict: true
});

gameRoutes.get('/', async (req, res) => {
  res.send(await game.getAll())
})

gameRoutes.get('/:title', async (req,res) => {
  var title = req.params.title

  res.send(await game.getGameBytitle(title))
})

gameRoutes.post('/', async (req,res) => {
  var title = req.body.title
  var install_size = req.body.install_size
  var released = req.body.released
  var cover_image = req.body.cover_image
  
  console.log(req.body);

  res.send(await game.createGame(title,install_size,released,cover_image))
})

gameRoutes.delete('/:title', async (req,res) => {
  var title = req.params.title

  res.send(await game.deleteGame(title))
})

gameRoutes.get('/dev/:title', async (req,res) => {
  var title = req.params.title
  
  res.send(await game.getGamesDev(title))
})

gameRoutes.get('/genre/:title', async (req,res) => {
  var title = req.params.title
  
  res.send(await game.getGamesGenre(title))
})

gameRoutes.post('/addDev', async (req,res) => {
  var titleGame = req.body.titleGame
  var nameDev = req.body.nameDev

  res.send(await game.addDevtoGame(titleGame,nameDev))
})

gameRoutes.post('/addGenre', async (req,res) => {
  var titleGame = req.body.titleGame
  var nameGenre = req.body.nameGenre

  res.send(await game.addGenretoGame(titleGame,nameGenre))
})

export default gameRoutes