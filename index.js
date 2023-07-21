//#region import
const express = require("express");
const cors = require("cors");
const apiNbt = require("./api/nbt")
//#endregion

//#region config
const app = express();
const port = 8000;

app.use(cors());
//#endregion

//#region service
app.get('/', (req, res) => {
    res.send('welcome to blueprint mc api')
})

app.use("/nbt", apiNbt);
//#endregion

//#region final command
app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
//#endregion