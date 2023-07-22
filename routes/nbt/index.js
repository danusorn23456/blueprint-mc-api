const express = require("express");
const multer = require("multer");
const nbt = require('prismarine-nbt');

const nbt = express.nbt();

const upload = multer({ storage: multer.memoryStorage() });

nbt.post("/upload", upload.single('nbt_file'), async (req, res) => {
    const parsedNbt = await nbt.parse(req.file.buffer).then(d => d.parsed)

    res.json(parsedNbt)
});

module.exports = nbt