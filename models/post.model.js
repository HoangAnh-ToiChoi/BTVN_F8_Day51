const { loadDB, saveDB } = require("../utils/jsonDB");
const postModel = {
    getAllPosts: async () => {
        try {
            const data = await loadDB("posts");
            return data;
        } catch (e) {
            throw e;
        }
    },
    getPostId: async (id) => {
        try {
            const posts = await loadDB("posts");
            const data = posts.find((p) => p.id === id);
            return data;
        } catch (e) {
            throw e;
        }
    },
    addPost: async (data) => {
        try {
            const posts = await loadDB("posts");
            const newData = {
                id: Date.now(),
                ...data,
                createAt: new Date().toISOString(),
            };
            posts.push(newData);
            // console.log(posts);

            await saveDB("posts", posts);
            return newData;
        } catch (e) {
            throw e;
        }
    },
    updatePost: async (id, data) => {
        try {
            const posts = await loadDB("posts");
            const idPost = posts.findIndex((p) => p.id === id);
            posts[idPost] = {
                ...posts[idPost],
                ...data,
            };
            await saveDB("posts", posts);
            return posts[idPost];
        } catch (e) {
            throw e;
        }
    },

    deletetPost: async (id) => {
        try {
            const posts = await loadDB("posts");
            const idPost = posts.findIndex((p) => p.id === id);
            if (idPost === -1) {
                const error = new Error(
                    "Bài viết không tồn tại để cập nhật/xóa",
                );
                throw error;
            }
            posts.splice(idPost, 1);
            await saveDB("posts", posts);
            return;
        } catch (e) {
            throw e;
        }
    },
};

module.exports = postModel;
