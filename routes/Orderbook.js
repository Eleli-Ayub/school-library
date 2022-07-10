const router = require("express").Router();
const { response } = require("express");
const Borrowed_Book = require("../models/Borrowedbooks");

router.post("/order-book", async (req, res) => {
  //Get data about the book being requested
  const bookImgUrl = req.body.bookImgUrl;
  const bookAuthor = req.body.bookImgUrl;
  const bookName = req.body.bookImgUrl;
  const phoneNumber = req.body.bookImgUrl;
  const studentRegNo = req.body.bookImgUrl;

  //Get the dates on book order
  const Date = new Date();
  const month = Date.toLocaleString("default", { month: "short" });
  const date = Date.getDate();
  const year = Date.getFullYear();
  const issueDate = `${date}/${month}/${year}`;

  const Return_Date = new Date() * 1000 * 60 * 60 * 24 * 7;
  const returnMonth = Return_Date.toLocaleString("default", { month: "short" });
  const returnDate = Return_Date.getDate();
  const returnYear = Return_Date.getFullYear();

  const returnTime = `${returnDate}/${returnMonth}/${returnYear}`;

  const New_Borrowed_Book = new Borrowed_Book({
    Imageurl: bookImgUrl,
    Book_Author: bookAuthor,
    Book_Name: bookName,
    Phone_Number: phoneNumber,
    Student_Reg_No: studentRegNo,
    Issue_Date: issueDate,
    Return_Date: returnTime,
    Status: "Not Returned",
  });

  try {
    await New_Borrowed_Book.save().then((error, response) => {
      if (error) {
        console.log(error);
      }
      res.send({ mg: "Book was Booked Succesfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
