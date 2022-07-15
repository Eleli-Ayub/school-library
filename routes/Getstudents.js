const router = require("express").Router();
const Student = require("../models/Student");

router.get("/get-students", async (req, res) => {
  Student.find({}, (error, result) => {
    if (error) {
      return res.status(500).send({ erromsg: "Could not find books" });
    }
    return res.send(result);
  });
});

module.exports = router;
