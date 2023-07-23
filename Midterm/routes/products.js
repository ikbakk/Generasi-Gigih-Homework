const productsRouter = require('express').Router();
const { getProductsByVideoId, addProduct } = require('../controllers/products');

productsRouter.get('/', getProductsByVideoId);
productsRouter.post('/', addProduct);

module.exports = productsRouter;
