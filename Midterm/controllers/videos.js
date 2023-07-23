const Video = require('../models/video');
const customError = require('../utils/customError');

const getAllVideos = async (req, res, next) => {
  const videos = await Video.find();
  res.status(200).json(videos);
};

const addVideo = async (req, res, next) => {
  try {
    const { title, url } = req.body;

    if (!title || !url) {
      return next(customError('Title and URL are required', 400));
    }

    const video = new Video({
      title,
      url
    });

    const result = await video.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const searchVideoByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title) {
      return next(customError('Title is required', 400));
    }

    const regex = new RegExp(title, 'i');
    const videos = await Video.find({ title: { $regex: regex } });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllVideos,
  addVideo,
  searchVideoByTitle
};
