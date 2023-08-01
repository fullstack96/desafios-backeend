const fs = require("fs");

class Contenedor {
  constructor() {
    this.file = "./products.json";
  }

  save = (obj) => {
    try {
      if (!fs.existsSync(this.file)) {
        fs.writeFileSync(this.file, JSON.stringify([], null, 2));
      }

      let data = fs.readFileSync(this.file, "utf-8");
      let products = JSON.parse(data);
      products.push({ ...obj, id: products.length + 1 });

      fs.writeFileSync(this.file, JSON.stringify(products, null, 2));
      return "Product added";
    } catch (err) {
      return err;
    }
  };

  getById = async (id) => {
    try {
      if (!fs.existsSync(this.file)) {
        return "There are no products";
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        if (id > products.length) {
          return "Product does not exist";
        } else {
          let product = products.find((product) => product.id === id);
          if (!product) {
            return "Product does not exist";
          } else {
            return product;
          }
        }
      }
    } catch (err) {
      return err;
    }
  };

  getAll = async () => {
    try {
      if (!fs.existsSync(this.file)) {
        return "There are no products";
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        return products;
      }
    } catch (err) {
      return err;
    }
  };

  deleteById = async (id) => {
    try {
      if (!fs.existsSync(this.file)) {
        return "There are no products";
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        if (id > products.length) {
          return "Product does not exist";
        } else {
          let newProducts = products.filter((product) => product.id !== id);
          fs.writeFileSync(this.file, JSON.stringify(newProducts, null, 2));
          return "Product deleted";
        }
      }
    } catch (err) {
      return err;
    }
  };

  deleteAll = () => {
    try {
      if (!fs.existsSync(this.file)) {
        return "There are no products";
      } else {
        fs.writeFileSync(this.file, JSON.stringify([], null, 2));
        return "Products deleted";
      }
    } catch (err) {
      return err;
    }
  };

  getRandom = async () => {
    try {
      try {
        if (!fs.existsSync(this.file)) {
          return "There are no products";
        } else {
          let data = await fs.promises.readFile(this.file, "utf-8");
          let products = JSON.parse(data);
          const randomProduct =
            products[Math.floor(Math.random() * products.length)];
          return randomProduct;
        }
      } catch (err) {
        return err;
      }
    } catch {}
  };
}

const contenedor = new Contenedor();

module.exports = contenedor;