const { loadDB, saveDB } = require("../utils/jsonDB");

const commentModel = {
    getAllCmts: async () => {
        try {
            const cmts = await loadDB("comments");
            return cmts;
        } catch (e) {
            throw e;
        }
    },
    getcommentId: async (id) => {
        try {
            const cmts = await loadDB("comments");
            const data = cmts.find((c) => c.id === id);
            return data;
        } catch (e) {
            throw e;
        }
    },
    addcomment: async (data) => {
        try {
            const cmts = await loadDB("comments");
            const newData = {
                id: Date.now(),
                ...data,
                createAt: new Date().toISOString(),
            };

            cmts.push(newData);
            await saveDB("comments", cmts);
            return newData;
        } catch (e) {
            throw e;
        }
    },
    updatecomment: async (id, data) => {
        try {
            const cmts = await loadDB("comments");
            const idcmt = cmts.findIndex((c) => c.id === id);
            cmts[idcmt] = {
                ...cmts[idcmt],
                ...data,
            };
            await saveDB("comments", cmts);
            return cmts[idcmt];
        } catch (e) {
            throw e;
        }
    },
    deletetcomment: async (id) => {
        try {
            const cmts = await loadDB("comments");
            const idCmt = cmts.findIndex((c) => c.id === id);

            if (idCmt === -1) {
                const error = new Error("Không tìm thấy comment");
                throw error;
            }

            cmts.splice(idCmt, 1);
            await saveDB("comments", cmts);
            return;
        } catch (e) {
            throw e;
        }
    },
};

module.exports = commentModel;
