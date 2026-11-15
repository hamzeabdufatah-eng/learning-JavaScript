const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to mahuraan gym API");
});
app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "protien",
      price: 10000,
    },
    {
      id: 2,
      name: "mass gainer",
      price: 12000,
    },
    {
      id: 3,
      name: "creatine",
      price: 8000,
    },
  ]);
});
app.listen(3000, () => {
  console.log("mahuraan gym server is running on port 3000");
});
