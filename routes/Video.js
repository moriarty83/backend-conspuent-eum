const router = require('express').Router();
const ctrl = require('../controllers');

const Auth = require("../middleware/Auth");

router.get('/', ctrl.videos.videoIndex);
router.get('/:id', ctrl.videos.videoShow);
router.put('/:id', ctrl.videos.videoUpdate);
router.put('/:id', ctrl.comments.commentUpdate)
router.post('/create', ctrl.videos.videoCreate);
router.post('/:id', Auth, ctrl.comments.commentCreate);
router.delete('/:id', Auth, ctrl.videos.videoDelete);


module.exports = router;