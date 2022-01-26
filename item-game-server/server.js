require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./router");
const api = require("./router/api");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(api);

app.use("/", (req, res) => {
  res.status(404).json({
    message: `404 Page Not Found`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
