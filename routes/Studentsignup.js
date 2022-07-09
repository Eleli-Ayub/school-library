const router = require("express").Router();
const Student = require("../models/Student");

router.post("/signup", async (req, res) => {
  //Get data from the bosy
  const bodydata = req.body;

  const imageurl = bodydata.imageurl;
  const firstName = bodydata.firstName;
  const lastName = bodydata.lastName;
  const phoneNumber = bodydata.phoneNumber;
  const emailAddress = bodydata.emailAddress;
  const adminNo = bodydata.adminNo;
  const course = bodydata.course;
  const password = bodydata.password;

  //Check if the student already exists
  const userExist = Student.find({ AdminNo: adminNo });
  if ((await userExist).length > 0) {
    res.send("Student Already Exists");
  } else {
    const newStudent = new Student({
      ImageUrl: imageurl,
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      EmailAddress: emailAddress,
      AdminNo: adminNo,
      Course: course,
      Password: password,
      BooksBorrowed: [],
      TotalPenalty: 0.0,
    });

    await newStudent.save().then((error, response) => {
      if (error) {
        console.log(error);
      }
      return res.send(" was added Succesfully");
    });
  }
});

module.exports = router;
