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

gameRoutes.post('/:title/:install_size/:released', async (req,res) => {
  var title = req.params.title
  var install_size = req.params.install_size
  var released = req.params.released

  res.send(await game.createGame(title,install_size,released))
})

export default gameRoutes