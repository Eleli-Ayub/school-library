const router = require('express').Router()
const Book = require('../models/Book')


router.get('/search-book', (req, res)=>{
    const searchInput = req.body.searchInput

    Book.find({$or: [{Name: searchInput}, {Author: searchInput}]}, (error, result)=>{
        if (error) {
            return res.send(error)
        }
        res.send(result)
    })
})

module.exports = router