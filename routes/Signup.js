const router = require('express').Router()
const User = require('../models/User')

router.post('/sign-up', async (req, res)=>{
    const newUser = new User({
        Username: req.body.username,
        Password: req.body.password
    })

    try {
        await newUser.save()
        res.send("User has been added")
    } catch (error) {
        res.send(error)
    }
})

module.exports = router