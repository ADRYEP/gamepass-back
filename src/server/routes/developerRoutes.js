import express from 'express';
import devController from '../controllers/developerController.js'

const dev = new devController()

const developerRoutes = express.Router({
    strict: true
});

developerRoutes.get('/', async (req, res) => {
    res.send(await dev.getAll())
})

developerRoutes.get('/:name', async (req,res) => {
    var name = req.params.name
  
    res.send(await dev.getDevByName(name))
})

developerRoutes.post('/', async (req,res) => {
    var name = req.body.name
    var country = req.body.country
    var creation_year = req.body.creation_year
    
    console.log(req.body);
  
    res.send(await dev.createDev(name,country,creation_year))
  })
  
developerRoutes.delete('/:name', async (req,res) => {
var name = req.params.name

res.send(await dev.deleteDev(name))
})

developerRoutes.get('/game/:name', async (req,res) => {
    var name = req.params.name
    
    res.send(await dev.getDevsGames(name))
  })

export default developerRoutes