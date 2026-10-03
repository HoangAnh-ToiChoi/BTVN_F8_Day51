const response = (req, res, next) => {
    res.success = (data, status = 200) => {
        res.status(status).json({
            status: "sussces",
            data,
        });
    };
    res.error = (error, status = 500) => {
        res.status(status).json({
            status: "error",
            error: error.message || error,
        });
    };
    next();
};

module.exports = response;
