
const Cacao = require('../models/cacaosModel')

function controller () {
  return {
    getAll: async (req, res) => {
      try {
        const cacaos = await Cacao.find({ ...req.query })
        res.json(cacaos)
      } catch (error) {
        res.status(500)
        res.send(error)
      }
    },

    create: async (req, res) => {
      try {
        const newCacaoProduct = await Cacao.create({
          ...req.body
        })

        res.json(newCacaoProduct)
      } catch (error) {
        res.status(500)
        res.send(error)
      }
    },
    getById: async (req, res) => {
      try {
        const { cacaoId } = req.params
        const cacao = await Cacao.findById(cacaoId)
        res.json(cacao)
      } catch (error) {
        res.status(500)
        res.send(error)
      }
    }

  }
}
module.exports = controller()
