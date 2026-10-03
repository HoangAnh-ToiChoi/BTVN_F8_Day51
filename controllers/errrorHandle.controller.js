const errorHandle = (error, req, res, next) => {
    res.error(error);
};

module.exports = errorHandle;
