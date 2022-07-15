const mongoose = require("mongoose");

const borrowedBookSchema = mongoose.Schema({
  Imageurl: {
    type: String,
    required: true,
  },
  Book_Author: {
    type: String,
    required: true,
  },
  Book_Name: {
    type: String,
    required: true,
  },
  Student_Reg_No: {
    type: String,
    required: true,
  },
  Issue_Date: {
    type: String,
    required: true,
  },
  Return_Date: {
    type: String,
    required: true,
  },
  Return_Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("borrowed_books", borrowedBookSchema);
