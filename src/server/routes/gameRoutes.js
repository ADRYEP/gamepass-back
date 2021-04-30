import express from 'express';

const gameRoutes = express.Router({
    strict: true
});

gameRoutes.get('/', (req, res) => {
  res.send('Testing game routes')
})

export default gameRoutes