var router = require('express').Router();
var db = require('../../../lib/database')();
// var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);


router.get('/', (req, res) => {
    res.render('admin/funeralmass/views/funeralmassreservation');
});
module.exports = router;