const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    user:{
        type: String,
        require: true,
        unique: true
    },
    data:{
        type: JSON,
        require: true,
        unique: true
    },
    isLike:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Like = mongoose.model('like', LikeSchema)