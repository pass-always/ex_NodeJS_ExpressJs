const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`welcome ${name}`);
  }
});

module.exports = router;
