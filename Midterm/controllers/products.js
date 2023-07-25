const Product = require('../models/product');
const customError = require('../utils/customError');

const getProductsByVideoId = async (req, res, next) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return next(customError('Video ID is required', 400, 'Failed'));
    }

    const products = await Product.find({ videoId });
    res.status(200).json({ status: 'Success', data: products });
  } catch (err) {
    next(customError('Video not found', 404, 'Failed'));
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { title, price, urlProduct, videoId } = req.body;
    const product = new Product({
      title,
      price,
      urlProduct,
      videoId
    });

    await product.save();

    res.status(201).json({ status: 'Success' });
  } catch (err) {
    next(customError(err.message, 400, 'Failed'));
  }
};

const searchProductByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title) {
      return next(customError('Title is required', 400, 'Failed'));
    }

    const regex = new RegExp(title, 'i');
    const products = await Product.find({ title: { $regex: regex } });

    res.status(200).json({ status: 'Success', data: products });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProductsByVideoId,
  addProduct,
  searchProductByTitle
};
