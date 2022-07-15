const router = require("express").Router();
const Student = require("../models/Student");

router.post("/sign-in", async (req, res) => {
  const adminNo = req.body.adminNo;
  const password = req.body.password;

  Student.find({ AdminNo: adminNo, Password: password }, (error, result) => {
    if (error) {
      res.send(error);
    }
    if (result.length > 0) {
      res.send({
        loginstatus: true,
        msg: "Login Succesfull",
      });
    } else {
      res.send({
        userData: result,
        msg: "Invalid credentials",
        loginstatus: false,
      });
    }
  });
});

module.exports = router;
