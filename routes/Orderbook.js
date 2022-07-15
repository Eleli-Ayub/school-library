const router = require("express").Router();
const { response } = require("express");
const Borrowedbook = require("../models/Borrowedbook");
const Student = require("../models/Student");

router.post("/order-book", async (req, res) => {
  //Get data about the book being requested
  const bookImgUrl = req.body.book_image_url;
  const bookAuthor = req.body.book_author;
  const bookName = req.body.book_name;
  const studentRegNo = req.body.adminNo;

  //Get the dates on book order
  const todayDate = new Date();
  const month = todayDate.toLocaleString("default", { month: "short" });
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const issueDate = `${date}/${month}/${year}`;

  //Get book return dates
  const Return_Date = todayDate;
  Return_Date.setDate(todayDate.getDate() + 7);
  const returnMonth = Return_Date.toLocaleString("default", { month: "short" });
  const returnDate = Return_Date.getDate();
  const returnYear = Return_Date.getFullYear();

  const returnTime = `${returnDate}/${returnMonth}/${returnYear}`;

  //Innitiate data for the new order record

  const New_Borrowed_Book = new Borrowedbook({
    Imageurl: bookImgUrl,
    Book_Author: bookAuthor,
    Book_Name: bookName,
    Student_Reg_No: studentRegNo,
    Issue_Date: issueDate,
    Return_Date: returnTime,
    Return_Status: "False",
  });

  New_Borrowed_Book.save().then((payload, error) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    Student.findOne({ Student_Reg_No: studentRegNo }, (error, payload) => {
      payload.TotalPenalty += 100;

      payload.save((err, anotherPayload) => {
        if (err) return res.status(500).send("Error");
        return res.send({
          msg: `${bookName} by ${bookAuthor} was requested. \nVisit the library to collect book`,
        });
      });
    });
  });
});
module.exports = router;
