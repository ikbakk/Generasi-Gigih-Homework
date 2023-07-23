const videosRouter = require('express').Router();
const {
  getAllVideos,
  addVideo,
  searchVideoByTitle
} = require('../controllers/videos');

videosRouter.get('/', getAllVideos);
videosRouter.get('/search', searchVideoByTitle);
videosRouter.post('/', addVideo);

module.exports = videosRouter;
