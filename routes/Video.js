const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.videos.videoIndex);
router.post('/create', ctrl.videos.videoCreate);

module.exports = router;