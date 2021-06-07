const { Router } = require('express')
const cacaosController = require('../controllers/cacaosController')

function cacaoRouter () {
  const cacaoRoutes = Router()

  cacaoRoutes
    .route('/')
    .get(cacaosController.getAll)
    .post(cacaosController.create)
  cacaoRoutes
    .route('/:productId')
    .get(cacaosController.getById)
    .put(cacaosController.getAll)
    .delete(cacaosController.create)

  return cacaoRoutes
}
module.exports = cacaoRouter()
