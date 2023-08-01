const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
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
      console.log("Product added");
    } catch (err) {
      console.log(err);
    }
  };

  getById = async (id) => {
    try {
      if (!fs.existsSync(this.file)) {
        console.log("There are no products");
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        if (id > products.length) {
          console.log("Product does not exist");
        } else {
          let product = products.find((product) => product.id === id);
          if (!product) {
            console.log("Product does not exist");
          } else {
            console.log(product);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async () => {
    try {
      if (!fs.existsSync(this.file)) {
        console.log("There are no products");
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        console.log(products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  deleteById = async (id) => {
    try {
      if (!fs.existsSync(this.file)) {
        console.log("There are no products");
      } else {
        let data = await fs.promises.readFile(this.file, "utf-8");
        let products = JSON.parse(data);
        if (id > products.length) {
          console.log("Product does not exist");
        } else {
          let newProducts = products.filter((product) => product.id !== id);
          fs.writeFileSync(this.file, JSON.stringify(newProducts, null, 2));
          console.log("Product deleted");
          console.log(newProducts);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  deleteAll = () => {
    try {
      if (!fs.existsSync(this.file)) {
        console.log("There are no products");
      } else {
        fs.writeFileSync(this.file, JSON.stringify([], null, 2));
        console.log("Products deleted");
      }
    } catch (err) {
      console.log(err);
    }
  };
}

const contenedor = new Contenedor("./data.json");

const producto = {
  title: "product name",
  price: 123,
  thumbnail: "product url",
};

contenedor.save(producto);
contenedor.save(producto);
contenedor.save(producto);
contenedor.save(producto);
contenedor.getById(1);
contenedor.getById(12);
contenedor.deleteById(4);
contenedor.deleteById(12);

setTimeout(() => {
  contenedor.deleteAll();
}, 1500);

setTimeout(() => {
  contenedor.getAll();
}, 3000);