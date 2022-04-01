const { response } = require("express");

module.exports = function (req, res=response) {
    res.status(404).send('404 page not found')
}