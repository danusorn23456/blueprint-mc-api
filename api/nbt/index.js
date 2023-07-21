const express = require("express");
const multer = require("multer");
const nbt = require('prismarine-nbt');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single('nbt_file'), async (req, res) => {
    const parsedNbt = await nbt.parse(req.file.buffer).then(d => d.parsed)

    res.json(parsedNbt)
});

module.exports = router