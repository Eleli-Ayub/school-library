const router = require("express").Router();
const Student = require("../models/Student");

router.post("/signup", async (req, res) => {
  //Get data from the bosy
  const bodydata = req.body;

  const imageurl = bodydata.imageurl;
  const studentName = bodydata.studentName;
  const adminNo = bodydata.adminNo;
  const course = bodydata.course;

  //Check if the student already exists
  if (Student.exists({ AdminNo: adminNo })) {
    res.send({ msg: "Student Already Exists" });
  } else {
    const newStudent = new Student({
      Imageurl: imageurl,
      StudentName: studentName,
      AdminNo: adminNo,
      Course: course,
      BooksBorrowed: 0,
      TotalPenalty: 0,
    });

    await newStudent.save().then((error, response) => {
      if (error) {
        console.log(error);
      }
      console.log(response);
    });
  }
});

module.exports = router;
