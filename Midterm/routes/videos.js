const videosRouter = require('express').Router();
const { getAllVideos, addVideo } = require('../controllers/videos');

videosRouter.get('/', getAllVideos);
videosRouter.post('/', addVideo);

module.exports = videosRouter;
