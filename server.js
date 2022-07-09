const express = require("express");
const mongoose = require("mongoose");
const Addbook = require("./routes/Addbook");
const Viewbooks = require("./routes/Viewbooks");
const Deletebook = require("./routes/Deletebook");
const Searchbook = require("./routes/Searchbook");
const Studentsignup = require("./routes/Studentsignup");
const Studentsignin = require("./routes/Studentsignin");
const cors = require("cors");
require("dotenv").config();

//Initialize the app using
const app = express();

app.use(cors());
app.use(express.json());

//Global variables
const PORT = process.env.PORT || 4000;

//Connect to the mongoDB database
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to the database");
});

//Routes
app.use("/api/book", Addbook);
app.use("/api/book", Viewbooks);
app.use("/api/book", Deletebook);
app.use("/api/book", Searchbook);
app.use("/api/students", Studentsignup);
app.use("/api/students", Studentsignin);

//Listen the app
app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log("Server is running");
});
