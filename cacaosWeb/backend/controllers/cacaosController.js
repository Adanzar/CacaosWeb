const Cacao = require('../models/cacaosModel')

function controller () {
//   const getAll = async (req, res) => {
//     const query = { ...req.query }
//     try {
//       const cacaos = await Cacao.find(query)
//       res.json(cacaos)
//     } catch (error) {
//       res.status(500)
//       res.send(error)
//     }
//   }
  const create = async (req, res) => {
    try {
      const cacaos = await Cacao.find({
        ...req.body
      })
      res.json(cacaos)
    } catch (error) {
      res.status(500)
      res.send(error)
    }
  }
  return {
    create

  }
}
module.exports = controller()
