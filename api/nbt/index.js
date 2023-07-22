const app = require("../../app")
const route = require("../../routes/nbt")

app.use("/nbt", route)

module.exports = app