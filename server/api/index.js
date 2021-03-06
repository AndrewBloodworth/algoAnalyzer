const router = require("express").Router();

router.use("/transactions", require("./transactions"));
router.use("/spaces", require("./spaces"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
