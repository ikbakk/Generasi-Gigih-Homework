const commentsRouter = require('express').Router();
const {
  getCommentsByVideoId,
  submitComment
} = require('../controllers/comments');

commentsRouter.get('/', getCommentsByVideoId);
commentsRouter.post('/', submitComment);

module.exports = commentsRouter;
