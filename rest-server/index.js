const express = require("express");

const app = express();

const contenedor = require("./Contenedor");

const PORT = 8080;

app.get("/products", async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await contenedor.getAll();
    if (limit) {
      const limitedProducts = products.slice(0, limit);
      res.json(limitedProducts);
    } else {
      res.json(products);
    }
  } catch (err) {
    console.error(err);
  }
});

app.get("/randomproduct", async (req, res) => {
  try {
    const randomProduct = await contenedor.getRandom();
    res.json(randomProduct);
  } catch {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});