const router = require("express").Router();
const Borrowedbook = require("../models/Borrowedbook");
const nodemailer = require("nodemailer");

router.post("/return-book", async (req, res) => {
  const myQuery = {
    Student_Reg_No: req.body.adm_no,
    Book_Name: req.body.book_name,
  };

  const newValues = { $set: { Return_Status: "True" } };
  Borrowedbook.updateOne(myQuery, newValues, (error, response) => {
    if (error) {
      return console.log(error);
    }
    res.send({ msg: "Book Has Been Returned succesfully" });
  });
});
module.exports = router;
