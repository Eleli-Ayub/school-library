const router = require('express').Router()
const { findOneAndDelete } = require('../models/Book')
const Book = require('../models/Book')

router.delete('/delete-book', async(req, res)=>{

       
        Book.findOneAndDelete({Name: req.body.name, Author: req.body.author}, (err, result)=>{
            if (err) {
                return res.send(err)
            }
            res.send("Book Deleted")
        })
        
  
})


module.exports = router