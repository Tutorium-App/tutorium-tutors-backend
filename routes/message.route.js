const router = require('express').Router();

const messageController = require('../controllers/fetchMessage.controller');


//fetch message
router.get('/fetchMessage', messageController.fetchMessage);
 
module.exports = router;
