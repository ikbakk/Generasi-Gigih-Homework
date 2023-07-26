const { Video } = require('../models');
const { BadRequestError, NotFoundError } = require('../utils/customErrors');

const validateVideoId = async videoId => {
  if (!videoId) {
    throw new BadRequestError('Video ID is required');
  }

  try {
    const video = await Video.findById(videoId);
    return video;
  } catch {
    throw new NotFoundError('Video not found');
  }
};

const createNewVideoInstance = async (title, url) => {
  if (!title) {
    throw new BadRequestError('Title is required');
  } else if (!url) {
    throw new BadRequestError('URL is required');
  }

  const video = new Video({
    title,
    url
  });
  await video.save();
};

const searchVideoByTitle = title => {
  if (!title) {
    throw new BadRequestError('Title is required');
  }

  const regex = new RegExp(title, 'i');
  const videos = Video.find({ title: { $regex: regex } });
  return videos;
};

module.exports = {
  validateVideoId,
  createNewVideoInstance,
  searchVideoByTitle
};
