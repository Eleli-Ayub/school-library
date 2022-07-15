const router = require("express").Router();
const Borrowedbook = require("../models/Borrowedbook");

router.get("/get-daily-sales", (req, res) => {
  const todayDate = new Date();
  const month = todayDate.toLocaleString("default", { month: "short" });
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const issueDate = `${date}/${month}/${year}`;

  Borrowedbook.find({ Issue_Date: issueDate }, (error, result) => {
    if (error) {
      return res.send(error).status(300);
    }
    res.send(result);
  });
});
module.exports = router;
