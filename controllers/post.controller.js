const postModel = require("../models/post.model");

const postController = {
    getAll: async (req, res) => {
        try {
            const data = await postModel.getAllPosts();

            res.success(data, 201);
        } catch (e) {
            res.error(e);
        }
    },
    getPostId: async (req, res) => {
        try {
            const data = await postModel.getPostId(+req.params.id);
            if (!data) res.error("Không tìm thấy bài viết", 404);
            res.success(data, 201);
        } catch (e) {
            res.error("Không tìm thấy comment", 401);
        }
    },
    addPost: async (req, res) => {
        try {
            const data = await postModel.addPost(req.body);
            res.success(data, 201);
        } catch (e) {
            res.error(e, 401);
        }
    },
    updatePost: async (req, res) => {
        try {
            const data = await postModel.updatePost(req.params.id, req.body);
            res.success(data, 201);
        } catch (e) {
            res.error(e, 401);
        }
    },
    deletetPost: async (req, res) => {
        try {
            const data = await postModel.deletetPost(req.params.id);
            res.success(data, 204);
        } catch (e) {
            res.error(e, 404);
        }
    },
};

module.exports = postController;
