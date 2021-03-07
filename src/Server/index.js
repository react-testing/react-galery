require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.API_PORT || 6000;
const routers = require("./routers/routers");

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("./uploads"));
app.use(bodyParser.json({ extended: true }));
app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${PORT} correctamente`);
});
