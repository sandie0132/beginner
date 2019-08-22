var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    Title: { 
        type : String
    },
    Description : {
        type: String
    },
    created_On : {
        type: Date,
        default: Date.now

    },
    updated_On : {
        type : Date,
        default : Date.now
    },

})

var User = module.exports = mongoose.model('user',userSchema)

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}



