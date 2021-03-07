const express = require("express");
const router = express.Router();
const BASE_URL = process.env.API_BASE_URL || `http://localhost:${PORT}/`;
const accessTokenSecret = process.env.SECRET_TOKEN;
const jwt = require("jsonwebtoken");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "/uploads"));
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const db = {
  email: "libardo@gmail.com",
  password: "28001320",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === db.email && password === db.password) {
    const token = jwt.sign({ email, password }, accessTokenSecret);
    res.json({
      code: 200,
      ok: true,
      data: {
        messages: ["Inicio de sesión correcto"],
        token,
      },
    });
  } else {
    res.status(401);
    res.json({
      code: 401,
      ok: false,
      data: {
        messages: ["Usuario o clave incorrecta"],
      },
    });
  }
});

router.get("/images", (req, res) => {
  let filenames = fs.readdirSync("./uploads");
  filenames = filenames.map((file) => BASE_URL + file);
  res.status(200);
  res.json({ ok: true, data: filenames });
});

router.post("/upload", upload.array("images"), (req, res) => {
  res.json({
    ok: true,
    data: {
      files: req.files,
    },
  });
});

module.exports = router;
