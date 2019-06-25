const mongoose = require('mongoose');

const user = mongoose.model('user', {
    fullname: {
        type: String
    },

    phone:{
        type:String
    },

    address: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    type:{
        type:String
    }


})
module.exports=user;