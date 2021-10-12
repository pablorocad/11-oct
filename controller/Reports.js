const { request, response } = require('express');

const firstReport = (req = request, res = response) => {
    res.json({message: "JIJI"});
};

module.exports = {
    firstReport
};