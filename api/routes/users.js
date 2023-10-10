const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Another one for post",
  });
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Another one for get",
  });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  if (id !== "Prince") {
    res.status(500).json({
      message: "You are not supposed to be here",
    });
    return;
  }

  res.status(200).json({
    message: "You are welcome boss",
  });
});

router.patch("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "User Details Updated",
  });
});

router.delete("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "User deleted",
  });
});

module.exports = router;
