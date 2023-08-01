class ProductManager {
    constructor() {
      this.products = [];
      this.precioBaseGanancias = 1.15;
    }
  
    addProduct(code) {
      if (!this.products.find((product) => product.code === code)) {
        this.products.push({
          id: this.products.length + 1,
          title: `Test Product ${this.products.length + 1}`,
          description: "This is a test product",
          price: 200 * this.precioBaseGanancias,
          thumbnail: `No Image`,
          code: "abc123",
          stock: 25,
        });
        console.log(`Product added`);
      } else {
        console.log(`Product already exists`);
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const productId = id;
      const product = this.products.find((product) => product.id === productId);
      if (!product || id > this.products.length) {
        return `Product not found or incorrect id`;
      }
  
      return product;
    }
  }
  
  const productManager = new ProductManager();
  
  console.log(productManager.getProducts());
  
  productManager.addProduct("abc123");
  
  console.log(productManager.getProducts());
  
  productManager.addProduct("abc123");
  
  console.log(productManager.getProductById(1));
  
  console.log(productManager.getProductById(2));