const router = require("express").Router();
const Borrowedbook = require("../models/Borrowedbook");

router.get("/get-weekly-sales", (req, res) => {
  const todayDate = new Date();
  const now = new Date();
  todayDate.setDate(todayDate.getDate() - 7);
  const month = todayDate.toLocaleString("default", { month: "short" });
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const issueDate = `${date}/${month}/${year}`;

  Borrowedbook.find({ $range: [now, issueDate] }, (error, result) => {
    if (error) {
      return res.send(error).status(300);
    }
    res.send(result);
  });
});
module.exports = router;
