// Show product list
function displayProducts() {
  const container = document.getElementById("productList");
  if (!container) return; // যদি প্রোডাক্ট সেকশন না থাকে

  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-4";

    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.desc}</p>
          <p class="fw-bold text-success">${p.price}</p>
          <div class="mt-auto">
            <a href="${p.link}" class="btn btn-info btn-sm w-100 mb-2">View Details</a>
            <button class="btn btn-success btn-sm w-100" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(prod);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Show cart
function displayCart() {
  const list = document.getElementById("cartItems");
  if (!list) return;

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = '<li class="list-group-item">Cart is empty</li>';
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.name} 
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    list.appendChild(li);
  });
}

// Remove from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  displayCart();
});
