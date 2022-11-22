//init
const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

//get users list
exports.all_users = (req, res) => {
    UserModel.find({}, (err, data) => {
        if(err) res.send(err);
        res.json(data);
    });
};

//add new user
exports.create_user = (req, res) => {
    const new_user = new UserModel(req.body);
    new_user.save((err, data) => {
        if(err) res.send(err);
        res.json(data);
    });
};

//get user
exports.load_user = (req, res) => {
    UserModel.findById(req.params.userId, (err, data) => {
        if(err) res.send(err);
        res.json(data);
    });
};

//update user
exports.update_user = (req, res) => {
    UserModel.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true },
        (err, data) => {
            if(err) res.send(err);
            res.json(data);
        }
    );
};

//delete user
exports.delete_user = (req, res) => {
    UserModel.deleteOne(
        {
            _id: req.params.userId
        },
        (err, data) => {
            if(err) res.send(err);
            res.json({ message: "Data successfully deleted" });
        }
    );
};