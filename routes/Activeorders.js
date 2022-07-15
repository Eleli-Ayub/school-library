const router = require("express").Router();
const Borrowedbook = require("../models/Borrowedbook");

router.get("/get-active-orders", (req, res) => {
  Borrowedbook.find({ Return_Status: "False" }, (error, result) => {
    if (error) {
      return res.send(error).status(300);
    }
    res.send(result);
    console.log(result);
  });
});
module.exports = router;
