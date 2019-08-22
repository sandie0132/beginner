// Initialize express router
let router = require('express').Router();
var controller = require('./controller');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',

    });
});



router.route('/user').get(controller.index).post(controller.newUser);

router.route('/user/:_id').delete(controller.deleteUser);


// Export API routes
module.exports = router;
