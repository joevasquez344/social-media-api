const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: Boolean,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }

})