const fs = require("fs/promises");
const path = require("path");

const loadDB = async (resource) => {
    const folderPath = path.join(__dirname, "..", "db");
    const filePath = path.join(folderPath, `${resource}.json`);
    try {
        const result = await fs.readFile(filePath, "utf8");
        return JSON.parse(result);
    } catch (e) {
        await fs.mkdir(folderPath, { recursive: true });
        await fs.writeFile(filePath, JSON.stringify([]));
        return [];
    }
};

const saveDB = async (resource, data) => {
    const folderPath = path.join(__dirname, "..", "db");
    const filePath = path.join(folderPath, `${resource}.json`);

    await fs.mkdir(folderPath, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

module.exports = { loadDB, saveDB };
