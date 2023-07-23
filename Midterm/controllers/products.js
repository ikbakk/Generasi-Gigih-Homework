const Product = require('../models/product');
const customError = require('../utils/customError');

const getProductsByVideoId = async (req, res, next) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return next(customError('Video ID is required', 400));
    }

    const products = await Product.find({ videoId });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { title, price, urlProduct, videoId } = req.body;

    if (!title || !price || !urlProduct || !videoId) {
      return next(customError('Missing attributes', 400));
    }

    const product = new Product({
      title,
      price,
      urlProduct,
      videoId
    });

    const result = await product.save();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProductsByVideoId,
  addProduct
};
