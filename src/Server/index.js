require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const ENV = process.env;
const PORT = ENV.API_PORT || 6000;
const BASE_URL = ENV.API_BASE_URL || `http://localhost:${PORT}/`;
const accessTokenSecret = ENV.SECRET_TOKEN;

app.use(cors());
app.use(express.static("./uploads"));
app.use(bodyParser.json({ extended: true }));

const db = {
  email: "libardo@gmail.com",
  password: "28001320",
};

app.post("/login", (req, res) => {
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

app.get("/images", (req, res) => {
  let filenames = fs.readdirSync("./uploads");
  filenames = filenames.map((file) => BASE_URL + file);
  res.status(200);
  res.json({ ok: true, data: filenames });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${PORT} correctamente`);
});
