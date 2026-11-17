
const products = [
  { name: "Paracetamol 500 mg", company: "Demo Pharma", stock: 120, category: "Tablet" },
  { name: "Vitamin C Tablets", company: "Demo Pharma", stock: 85, category: "Supplement" },
  { name: "ORS Powder", company: "Demo Healthcare", stock: 45, category: "Powder" },
  { name: "Antacid Tablets", company: "Demo Healthcare", stock: 8, category: "Tablet" },
  { name: "Cough Syrup Demo", company: "Demo Pharma", stock: 0, category: "Syrup" },
  { name: "Multivitamin Tablets", company: "Demo Healthcare", stock: 65, category: "Tablet" }
];

const productList = document.getElementById("productList");
const search = document.getElementById("search");

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const details = document.createElement("div");
    const name = document.createElement("h3");
    const info = document.createElement("p");

    name.textContent = product.name;
    info.textContent =
      `${product.company} • ${product.category} • Demo quantity: ${product.stock}`;

    const status = document.createElement("span");
    status.className = "stock";

    if (product.stock === 0) {
      status.textContent = "Out of stock";
    } else if (product.stock <= 10) {
      status.textContent = "Low stock";
    } else {
      status.textContent = "Demo stock";
    }

    details.append(name, info);
    card.append(details, status);
    productList.appendChild(card);
  });
}

function updateStats() {
  document.getElementById("totalProducts").textContent =
    products.length;

  document.getElementById("lowStock").textContent =
    products.filter(p => p.stock > 0 && p.stock <= 10).length;

  document.getElementById("outStock").textContent =
    products.filter(p => p.stock === 0).length;
}

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.company.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  renderProducts(filtered);
});

updateStats();
renderProducts(products);
