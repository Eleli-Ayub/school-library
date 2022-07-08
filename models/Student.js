const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  ImageUrl: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
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
  BooksBorrowed: [
    {
      BookName: String,
      IssueDate: String,
      ReturnStatus: Boolean,
    },
  ],
  TotalPenalty: {
    type: Number,
  },
});

module.exports = mongoose.model("Student", studentSchema);
