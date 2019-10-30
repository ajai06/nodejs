var express = require('express');
var router = express.Router();
var chatHandler = require('../controller/chatController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('express working');
});

// get all chats
router.get('/home', chatHandler.getChats);

//post chats
router.post('/chats', chatHandler.sentChats);



module.exports = router;
