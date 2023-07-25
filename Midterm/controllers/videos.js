const Video = require('../models/video');
const customError = require('../utils/customError');

const getAllVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.status(200).json({ status: 'Success', data: videos });
  } catch (err) {
    next(customError(err.message, 500, 'Failed'));
  }
};

const addVideo = async (req, res, next) => {
  try {
    const { title, url } = req.body;
    const video = new Video({
      title,
      url
    });

    await video.save();
    res.status(201).json({ status: 'success' });
  } catch (err) {
    next(customError(err.message, 400, 'Failed'));
  }
};

const searchVideoByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title) {
      return next(customError('Title is required', 400, 'Failed'));
    }

    const regex = new RegExp(title, 'i');
    const videos = await Video.find({ title: { $regex: regex } });
    res.status(200).json({ status: 'Success', data: videos });
  } catch (err) {
    next(customError(err.message, 500, 'Failed'));
  }
};

module.exports = {
  getAllVideos,
  addVideo,
  searchVideoByTitle
};
