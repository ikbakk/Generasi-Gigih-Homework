const Comment = require('../models/comment');
const customError = require('../utils/customError');

const getCommentsByVideoId = async (req, res, next) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return next(customError('Video ID is required', 400, 'Failed'));
    }

    const comments = await Comment.find({ videoId });

    res.status(200).json({ status: 'Success', data: comments });
  } catch (err) {
    next(customError('Video not found', 404, 'Failed'));
  }
};

const submitComment = async (req, res, next) => {
  try {
    const { videoId, username, comment } = req.body;
    const newComment = new Comment({
      videoId,
      username,
      comment
    });

    await newComment.save();

    res.status(201).json({ status: 'Success' });
  } catch (err) {
    next(customError(err.message, 400, 'Failed'));
  }
};

module.exports = {
  getCommentsByVideoId,
  submitComment
};
