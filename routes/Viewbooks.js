const router = require('express').Router()
const Book = require('../models/Book')

router.get('/view-books', async (req, res)=>{
  
        Book.find({}, (error, result)=>{
            if (error) {
               return res.send(error).status(300)
            }
            res.send(result)
        })
        
    
})

module.exports = router