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

export default gameRoutes