const User = require('../models/user-model')

const findOne = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user name.!',
        })
    }
    await User.find({ name: req.params.name }, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        console.log('User', doc);
        if (!doc.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, auth: true });
    }).catch(err => console.log(err))
}

module.exports = {
    findOne
}