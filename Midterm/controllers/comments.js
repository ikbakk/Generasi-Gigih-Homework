const Comment = require('../models/comment');
const customError = require('../utils/customError');

const getCommentsByVideoId = async (req, res, next) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return next(customError('Video ID is required', 400));
    }

    const comments = await Comment.find({ videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

const submitComment = async (req, res) => {
  try {
    const { videoId, username, comment } = req.body;

    if (!videoId || !username || !comment) {
      throw new Error('Failed');
    }

    const newComment = new Comment({
      videoId,
      username,
      comment
    });

    await newComment.save();
    res.status(200).json({ status: 'Success' });
  } catch (err) {
    res.status(400).json({ status: err.message });
  }
};

module.exports = {
  getCommentsByVideoId,
  submitComment
};
