/* ===============================
   PRIME STORE - MAIN JS
================================ */


/* ========= GET ELEMENTS ========= */

function $(id) {
  return document.getElementById(id);
}

const searchInput = $("searchInput");
const productList = $("productList");

const loginBtn = $("loginBtn");
const modal = $("loginModal");
const closeBtn = document.querySelector(".close");

const cartBtn = document.querySelector(".cart-btn");

/* login inputs inside modal */
const usernameInput = modal ? modal.querySelectorAll("input")[0] : null;
const passwordInput = modal ? modal.querySelectorAll("input")[1] : null;
const modalLoginBtn = modal ? modal.querySelector(".modal-box button") : null;



/* ===============================
   SEARCH FILTER
================================ */

if (searchInput && productList) {

  const cards = productList.querySelectorAll(".card");

  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {

      const title = card.querySelector("h4").innerText.toLowerCase();

      card.style.display = title.includes(value) ? "block" : "none";

    });

  });
}



/* ===============================
   LOGIN MODAL OPEN
================================ */

if (loginBtn && modal) {
  loginBtn.addEventListener("click", openLoginModal);
}

function openLoginModal() {

  /* if already logged in → logout */
  const savedUser = localStorage.getItem("primeUser");

  if (savedUser) {
    logout();
  } else {
    modal.style.display = "flex";
  }
}



/* ===============================
   CLOSE MODAL
================================ */

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



/* ===============================
   LOGIN FUNCTION (LOCAL STORAGE)
================================ */

if (modalLoginBtn) {

  modalLoginBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("⚠ Please enter username & password");
      return;
    }

    /* Save username in browser */
    localStorage.setItem("primeUser", username);

    alert("✅ Login Successful!");

    modal.style.display = "none";

    setLoggedInUI(username);

  });

}



/* ===============================
   AUTO LOGIN AFTER REFRESH
================================ */

window.addEventListener("DOMContentLoaded", () => {

  const savedUser = localStorage.getItem("primeUser");

  if (savedUser) {
    setLoggedInUI(savedUser);
  }

});



/* ===============================
   CHANGE BUTTON AFTER LOGIN
================================ */

function setLoggedInUI(username) {
  loginBtn.innerText = "Logout (" + username + ")";
}



/* ===============================
   LOGOUT
================================ */

function logout() {
  localStorage.removeItem("primeUser");
  alert("👋 Logged out successfully");
  location.reload();
}



/* ===============================
   CART BUTTON → GO TO CART PAGE
================================ */

/* ===============================
   CART BUTTON → GO TO CART PAGE
================================ */

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}


    