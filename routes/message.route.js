const router = require('express').Router();

const messageController = require('../controllers/fetchMessage.controller');


//fetch message
router.post('/fetchMessage', messageController.fetchMessage);
 
module.exports = router;
