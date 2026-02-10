let cart = [];

const products = [
  { name: "Écouteurs sans fil", price: 29 },
  { name: "Chargeur téléphone", price: 15 },
  { name: "Câble USB", price: 10 },
  { name: "Coque téléphone", price: 13 }
];

const productDiv = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.innerHTML = `
    <strong>${product.name}</strong><br>
    Prix : $${product.price}<br>
    <button onclick="addToCart('${product.name}')">Ajouter</button>
  `;
  productDiv.appendChild(div);
});

function addToCart(name) {
  cart.push(name);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  const message = "Commande LUJEX : " + cart.join(", ");
  window.location.href =
    "mailto:jamesngoie517@gmail.com?subject=Commande LUJEX&body=" +
    encodeURIComponent(message);
}