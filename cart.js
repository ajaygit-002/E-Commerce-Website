/* ===============================
   CART PAGE LOGIC
================================ */

const welcomeText = document.getElementById("welcomeText");
const cartItemsBox = document.getElementById("cartItems");
const emptyMsg = document.getElementById("emptyMsg");
const backBtn = document.getElementById("backBtn");


/* ===== Back button ===== */

backBtn.onclick = () => {
  window.location.href = "index.html";
};


/* ===============================
   USER LOGIN CHECK
================================ */

const user = localStorage.getItem("primeUser");

if (user) {
  welcomeText.innerText = "Welcome, " + user + " 👋";
} else {
  welcomeText.innerText = "Please login first";
}


/* ===============================
   DEMO CART DATA
   (you can later connect real cart)
================================ */

const demoCart = [
  { name: "Headphones", price: 49 },
  { name: "Shoes", price: 59 },
  { name: "Bag", price: 99 }
];


/* ===============================
   SHOW CART ITEMS
================================ */

if (user && demoCart.length > 0) {

  emptyMsg.style.display = "none";

  let total = 0;

  demoCart.forEach(item => {

    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <p>${item.name}</p>
      <span>$${item.price}</span>
    `;

    cartItemsBox.appendChild(div);
  });

  /* total price */
  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-item";
  totalDiv.innerHTML = `<b>Total</b><span>$${total}</span>`;

  cartItemsBox.appendChild(totalDiv);

}
