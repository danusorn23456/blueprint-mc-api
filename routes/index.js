const routes = require("express").Router();

const nbt = require("./nbt");

routes.get("/", async function (req, res) {
    //homepage route returns some HTML
    res.send(`<h1>welcome to blueprint mc api</h1>`);
});

routes.use("/nbt", nbt);

module.exports = routes;