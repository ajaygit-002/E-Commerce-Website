/* ===== SEARCH FILTER ===== */
const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", () => {
  let value = input.value.toLowerCase();

  cards.forEach(card => {
    const text = card.querySelector("h4").textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

/* ===== LOGIN MODAL ===== */
const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const close = document.querySelector(".close");

loginBtn.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";
