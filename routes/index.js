const express = require("express");

const postRouter = require("./posts.route");
const commentRouter = require("./comments.route");

const router = express();

router.use("/posts", postRouter);
router.use("/comments", commentRouter);

module.exports = router;
