const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    likes: { type: Number },
})

module.exports = mongoose.model('Post', postSchema)