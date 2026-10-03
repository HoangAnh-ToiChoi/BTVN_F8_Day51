const express = require("express");
const router = express();

const postController = require("../controllers/post.controller");

router.get("/", postController.getAll);

router.get("/:id", postController.getPostId);

router.post("/", postController.addPost);

router.put("/:id", postController.updatePost);

router.delete("/:id", postController.deletetPost);

module.exports = router;
