class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  sell() {
    this.quantity--;
  }
  store() {
    this.quantity++;
  }
}

const body = document.querySelector("body");
const products = [
  { name: "Dress", price: 12, quantity: 4 },
  { name: "Shirt", price: 22, quantity: 2 },
  { name: "Jacket", price: 40, quantity: 1 },
  { name: "Skirt", price: 20, quantity: 3 },
  { name: "Headband", price: 2, quantity: 10 },
  { name: "T-shirt", price: 15, quantity: 6 },
  { name: "Cosmetics", price: 100, quantity: 30 },
];

products.forEach((product, i) => {
  const newProduct = new Product(product.name, product.price, product.quantity);

  const productDisplay = document.createElement("div");
  productDisplay.className = "product";

  const productName = document.createElement("strong");
  productName.innerText = `Product ${i + 1}`;

  const productInfo = document.createElement("div");
  productInfo.innerHTML = `Product Name: ${product.name}. <br> Price: ${product.price}. <br> Quantity: ${newProduct.quantity}.`;

  const buyBtn = document.createElement("button");
  buyBtn.innerText = "Buy";

  buyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newProduct.sell();
    productInfo.innerHTML = `Product Name: ${product.name}. <br> Price: ${product.price}. <br> Quantity: ${newProduct.quantity}.`;
  });

  productDisplay.appendChild(productName);
  productDisplay.appendChild(productInfo);
  productDisplay.appendChild(buyBtn);

  body.appendChild(productDisplay);
});
