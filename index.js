/* ===================================
   GET ELEMENTS
=================================== */
const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

const cards = productList ? productList.querySelectorAll(".card") : [];


/* ===================================
   SEARCH FUNCTION
=================================== */
function searchProducts() {
  const value = searchInput.value.toLowerCase();

  cards.forEach(function(card) {

    const name = card.querySelector("h4").textContent.toLowerCase();
    const price = card.querySelector("p").textContent.toLowerCase();

    if (name.includes(value) || price.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });
}


/* ===================================
   OPEN MODAL
=================================== */
function openModal() {
  modal.style.display = "flex";
}


/* ===================================
   CLOSE MODAL
=================================== */
function closeModal() {
  modal.style.display = "none";
}


/* ===================================
   LOGIN CHECK
=================================== */
function loginUser() {

  const inputs = modal.querySelectorAll("input");

  const username = inputs[0].value;
  const password = inputs[1].value;

  if (username !== "" && password !== "") {
    alert("Login successful!");
    closeModal();

    inputs[0].value = "";
    inputs[1].value = "";
  } 
  else {
    alert("Please fill in all fields!");
  }
}


/* ===================================
   EVENTS
=================================== */

if (searchInput) {
  searchInput.addEventListener("keyup", searchProducts);
}

if (loginBtn) {
  loginBtn.addEventListener("click", openModal);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", function(e){
    if(e.target === modal){
      closeModal();
    }
  });
}

/* login button inside modal */
const loginFormBtn = modal ? modal.querySelector("button") : null;
if (loginFormBtn) {
  loginFormBtn.addEventListener("click", loginUser);
}
