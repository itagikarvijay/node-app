const express = require('express')
const utility = require('../utility/utility')

const loginCtrl = require('../controllers/login-ctrl');

const router = express.Router();

router.get('/findOne/:name/:password', loginCtrl.findOne)
router.post('/token', utility.getJwtToken)

module.exports = router