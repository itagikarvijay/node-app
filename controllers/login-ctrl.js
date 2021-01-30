const User = require('../models/user-model')
const bcrypt = require('bcryptjs')

const findOne = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user name.!',
        })
    }
    console.log(req.params.name)
    console.log(req.params.password)
    await User.find({ name: req.params.name }, (err, doc) => {
        console.log('doc', doc);
        console.log('doc', doc[0].password);
        let passwordIsValid = bcrypt.compareSync(req.params.password, doc[0].password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        console.log('User', doc);
        if (!doc.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, auth: true, data: doc });
    }).catch(err => console.log(err))
}

module.exports = {
    findOne
}