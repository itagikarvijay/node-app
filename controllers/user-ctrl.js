const UserModel = require('../models/user-model')
const bcrypt = require('bcryptjs')

const saveUser = async (req, res, next) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user.!',
        })
    } else {
        let hashedPassword = bcrypt.hashSync(req.body.password, 10);
        let user = new UserModel({
            name: req.body.name,
            password: hashedPassword
        })
        await user
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: user._id,
                    message: 'User created.!',
                })
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json({
                    error,
                    message: 'User Not created.!',
                })
            })
    }
}

module.exports = {
    saveUser
}