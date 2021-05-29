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
  let title = req.params.title

  res.send(await game.getGameBytitle(title))
})

gameRoutes.post('/', async (req,res) => {
  let title = req.body.title
  let released = req.body.released
  let install_size = req.body.install_size
  let cover_image = req.body.cover_image

  res.send(await game.createGame(title,released,install_size,cover_image))
})

gameRoutes.delete('/:title', async (req,res) => {
  let title = req.params.title

  res.send(await game.deleteGame(title))
})

gameRoutes.get('/dev/:title', async (req,res) => {
  let title = req.params.title
  
  res.send(await game.getGamesDev(title))
})

gameRoutes.get('/genre/:title', async (req,res) => {
  let title = req.params.title
  
  res.send(await game.getGamesGenre(title))
})

gameRoutes.post('/addDev', async (req,res) => {
  let titleGame = req.body.titleGame
  let nameDev = req.body.nameDev

  res.send(await game.addDevtoGame(titleGame,nameDev))
})

gameRoutes.post('/addGenre', async (req,res) => {
  let titleGame = req.body.titleGame
  let nameGenre = req.body.nameGenre

  res.send(await game.addGenretoGame(titleGame,nameGenre))
})

gameRoutes.get('/all/graph', async (req,res) => {
  res.send(await game.getAllGraph())
})

export default gameRoutes