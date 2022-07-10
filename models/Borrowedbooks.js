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
  Phone_Number: {
    type: String,
    required: true,
  },
  Student_Reg_No: {
    type: String,
    required: true,
  },
  Issue_Date: {
    type: Date,
    required: true,
  },
  Return_Date: {
    type: Date,
    required: true,
  },
  Status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Borrowed_Book", borrowedBookSchema);
