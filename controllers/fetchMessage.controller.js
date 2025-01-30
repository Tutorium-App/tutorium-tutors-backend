const messageModel = require('../models/message.models');

exports.fetchMessage = async (req, res) => {

    try {
        const { messageID } = req.params;
        const message = await messageModel.findOne({ messageID });

        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the message' });
    }
};
