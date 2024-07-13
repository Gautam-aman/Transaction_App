const express = require('express');
const userRouter = require("./userrouter");
const accountRouter = require("./accountrouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;