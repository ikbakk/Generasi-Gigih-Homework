const productsRouter = require('express').Router();
const {
  getProducts,
  addProduct,
  searchProductByTitle
} = require('../controllers/products');

productsRouter.get('/', getProducts);
productsRouter.get('/search', searchProductByTitle);
productsRouter.post('/', addProduct);

module.exports = productsRouter;
