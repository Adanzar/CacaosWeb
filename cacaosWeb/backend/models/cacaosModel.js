const { model, Schema } = require('mongoose')
const cacosSchema = Schema({
  name: String,
  stock: Number,
  price: {
    amount: Number,
    currency: String
  },
  weight: {
    quantity: Number,
    measure: String
  },
  ingredients: [String],
  description: String,
  imagesUrls: [String],
  category: String
})

module.exports = model('Cacaos', cacosSchema)
