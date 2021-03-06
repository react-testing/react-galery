const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(bodyParser.json({ extended: true }));
const accessTokenSecret = "libardojesusrengifo@znareak";

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
  filenames = filenames.map((file) => path.resolve(__dirname + "/uploads/" + file));
  res.status(200);
  res.json({ ok: true, data: filenames });
});

app.listen(5000, () => {
  console.log("Servidor iniciado correctamente");
});
