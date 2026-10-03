const express = require("express");

const router = express();

const commentController = require("../controllers/comment.controller");

router.get("/", commentController.getAllcmts);

router.get("/:id", commentController.getcommentId);

router.post("/", commentController.addcomment);

router.put("/:id", commentController.updatecomment);

router.delete("/:id", commentController.deletetcomment);

module.exports = router;
