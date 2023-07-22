const express = require('express');
const cors = require("cors");
const nbt = require('prismarine-nbt');
const multer = require("multer")

const app = express();
const PORT = process.env.PORT || 8081;

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>welcome to blueprint mc api</h1>")
});

app.post("/upload", upload.single('nbt_file'), async (req, res) => {
    const parsedNbt = await nbt.parse(req.file.buffer).then(d => d.parsed)

    res.json(parsedNbt)
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});