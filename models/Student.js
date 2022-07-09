const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  ImageUrl: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
  AdminNo: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  BooksBorrowed: [
    {
      BookName: String,
      IssueDate: String,
      ReturnStatus: Boolean,
    },
  ],

  TotalPenalty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
