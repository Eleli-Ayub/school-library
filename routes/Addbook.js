const router = require("express").Router();
const Book = require("../models/Book");

router.post("/add-book", async (req, res) => {
  //Check if book already exist
  const bookExist = await Book.findOne({
    Name: req.body.name,
    Author: req.body.author,
  });
  if (bookExist) {
    return res.send("Book exists");
  }

  const newBook = new Book({
    //Get data from the front end and save for saving book details in DB
    Name: req.body.bookName,
    ThumbnailUrl: req.body.bookUrl,
    Author: req.body.authorName,
    CopiesAvailable: req.body.copiesAvailable,
  });

  //Save new book to DB
  try {
    await newBook.save();
    res.send({ msg: "The book was added successfully" });
  } catch (error) {
    res.send({ msg: `The book was not added due to ${error}` });
  }
});

module.exports = router;
