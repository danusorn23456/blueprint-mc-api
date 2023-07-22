//#region import
const express = require("express");
const cors = require("cors");
const { route } = require("./routes");

//#endregion

//#region config
const app = express();
const port = 8000;

app.use(cors());
app.use("/", route)
//#endregion



//#region final command
app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
//#endregion

module.exports = app