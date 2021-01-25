const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    avatar: String,
    bio: String,

})