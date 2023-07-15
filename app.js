require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/productsRoutes.js");

app.use(cors());
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(5000, () => {
  console.log("listening on port 5000");
});
