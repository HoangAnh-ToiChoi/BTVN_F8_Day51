const commentModel = require("../models/comment.model");

const commentController = {
    getAllcmts: async (req, res) => {
        try {
            const data = await commentModel.getAllCmts();
            res.success(data, 201);
        } catch (e) {
            res.error(e, 400);
        }
    },
    getcommentId: async (req, res) => {
        try {
            const data = await commentModel.getcommentId(+req.params.id);
            if (!data) {
                const error = new Error("Không tìm thấy comment");
                res.error(error, 404);
            }
            res.success(data, 201);
        } catch (e) {
            res.error(e);
        }
    },
    addcomment: async (req, res) => {
        try {
            const data = await commentModel.addcomment(req.body);
            res.success(data, 201);
        } catch (e) {
            res.error(e);
        }
    },
    updatecomment: async (req, res) => {
        try {
            const data = await commentModel.updatecomment(
                req.params.id,
                req.body,
            );
            res.success(data, 201);
        } catch (e) {
            res.error(e);
        }
    },
    deletetcomment: async (req, res) => {
        try {
            const data = await commentModel.deletetcomment(+req.params.id);
            res.success(data, 204);
        } catch (e) {
            res.error(e);
        }
    },
};

module.exports = commentController;
