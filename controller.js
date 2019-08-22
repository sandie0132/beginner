var User = require('./model');

//creating a new user
exports.index = function (req, res) {
    User.get(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: user
        });
    });
};



exports.newUser = function (req, res) {
    var user = new User();
    console.log("i am here 11")

    user.Title = req.body.Title;
    user.Description = req.body.Description;
    user.create_On = req.body.created_On;
    user.Updated_On = req.body.Updated_On

    user.save(function (err) {
        if (err)
            res.json(err)

        console.log("i am in user")
        res.json({
            message: 'new user created',
            data: user

        });
    });

}

exports.deleteUser = function (req, res) {
    User.remove({ _id: req.body._id }, function (err, user) {
        if (err)
            res.send(err)

        res.json({
            message: "user deleted"
        });

    });




}
