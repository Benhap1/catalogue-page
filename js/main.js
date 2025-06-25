const products = [
  { id: 1, name: "T-shirt", category: "clothing", price: "$19.99", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jeans", category: "clothing", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Laptop", category: "electronics", price: "$899.99", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", category: "electronics", price: "$129.99", image: "https://via.placeholder.com/150" },
];

let cartCount = 0;

const productList = document.getElementById('productList');
const cartCounter = document.getElementById('cartCount');

function renderProducts(filter = "all") {
  productList.innerHTML = "";

  const filteredProducts = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="add-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    renderProducts(category);
  });
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    cartCount++;
    cartCounter.textContent = cartCount;
  }
});

renderProducts();
