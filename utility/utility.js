const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    console.log('Token from req', req.headers['x-access-token']);
    jwt.verify(req.headers['x-access-token'], process.env.REACT_APP_SECRET_KEY, function (err, decoded) {
        console.log('err', err)
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        console.log('DECODE ', decoded)
        next();
    });
}

const getJwtToken = (req, res) => {
    console.log("getJwtToken");
    console.log(req);
    token = jwt.sign({ id: 101 }, process.env.REACT_APP_SECRET_KEY, {
        expiresIn: 6000
    });
    return res.json({ success: true, auth: true, token: token, data: req.body.data })
}

module.exports = {
    getJwtToken,
    verifyToken
}