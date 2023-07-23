const productsRouter = require('express').Router();
const {
  getProductsByVideoId,
  addProduct,
  searchProductByTitle
} = require('../controllers/products');

productsRouter.get('/', getProductsByVideoId);
productsRouter.get('/search', searchProductByTitle);
productsRouter.post('/', addProduct);

module.exports = productsRouter;
