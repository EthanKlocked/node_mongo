//init
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const UserSchema = new Schema({
    user_name:{
        type: String,
        required:true
    },
    user_regdate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);