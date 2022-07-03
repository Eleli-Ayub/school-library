const router = require('express').Router()
const Book = require('../models/Book')

router.post('/add-book', async(req, res)=>{
    //Check if book already exist
    const bookExist = await Book.findOne({ Name: req.body.name, Author: req.body.author})
    if (bookExist) {
        return res.send("Book exists")
    }

    const newBook = new Book({
        //Get data from the front end and save for saving book details in DB
        Name: req.body.name,
        ThumbnailUrl: req.body.thumbnailUrl,
        Description: req.body.description,
        Author: req.body.author,
        NoOfReads: req.body.noOfReads,
        PagesNo: req.body.pagesNo,
    })
    
    //Save new book to DB
    try {
        await newBook.save()
        res.send("The book was added successfully")
    } catch (error) {
        res.send("New book was not added")
    }
})


module.exports = router