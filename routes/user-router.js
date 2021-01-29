const express = require('express')
const utility = require('../utility/utility')

const userCtrl = require('../controllers/user-ctrl')
const router = express.Router();

router.post('/register', utility.verifyToken, userCtrl.saveUser)

module.exports = router