const router = require('express').Router()
const User = require('../models/User')

router.post('/sign-in', async (req, res)=>{

    const username = req.body.username
    const password = req.body.password

    User.find({Username: username, Password: password}, (error, result)=>{
        if (error) {
            res.send(error)
        }
        res.send('Login Succesiful')
    })
})

module.exports = router