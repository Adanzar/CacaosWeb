const Product = require('../models/cacaosModel');

function controller() {
  return {
    getAll: async (req, res) => {
      try {
        const products = await Product.find({ ...req.query });
        res.json(products);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    },

    create: async (req, res) => {
      try {
        const newCacaoProduct = await Product.create({
          ...req.body
        });

        res.json(newCacaoProduct);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    },
    getById: async (req, res) => {
      try {
        const { productId } = req.params;
        const cacao = await Product.findById(productId);
        res.json(cacao);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    },
    updateById: async (req, res) => {
      try {
        const { productId } = req.params;
        const heroUpdated = await Product.findByIdAndUpdate(
          productId,
          req.body,
          { new: true }
        );
        res.json(heroUpdated);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    },
    deleteById: async (req, res) => {
      const { productId } = req.params;
      await Product.findByIdAndDelete(productId);
      res.status(204);
      res.json();
    }

  };
}
module.exports = controller();
