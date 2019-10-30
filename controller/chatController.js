const Chat = require('../model/chatModel');

// get all chat 
exports.getChats = (req,res) => {
    res.render('index', { title: 'Express' });
    res.send('hellos')
};

// post chat messages
exports.sentChats = (req,res) => {
    res.send('s')
};