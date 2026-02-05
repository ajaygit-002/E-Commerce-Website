/* ========= GET ELEMENTS ========= */

function $(id){
  return document.getElementById(id);
}

var searchInput = $("searchInput");
var productList = $("productList");
var loginBtn = $("loginBtn");
var modal = $("loginModal");
var closeBtn = document.querySelector(".close");

var cards = productList ? productList.querySelectorAll(".card") : [];


/* ========= SEARCH ========= */

function searchProducts() {

  var value = searchInput.value.toLowerCase();

  for(var i = 0; i < cards.length; i++){

    var text = cards[i].innerText.toLowerCase();

    if(text.indexOf(value) !== -1){
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }

  }
}


/* ========= MODAL ========= */

function openModal(){
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}


/* ========= LOGIN ========= */

function loginUser(){

  var inputs = modal.querySelectorAll("input");

  var user = inputs[0].value;
  var pass = inputs[1].value;

  if(user && pass){
    alert("Login successful!");
    inputs[0].value = "";
    inputs[1].value = "";
    closeModal();
  } else {
    alert("Please fill in all fields!");
  }
}


/* ========= EVENTS ========= */

if(searchInput){
  searchInput.addEventListener("keyup", searchProducts);
}

if(loginBtn){
  loginBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

if(modal){
  modal.addEventListener("click", function(e){
    if(e.target === modal){
      closeModal();
    }
  });

  var loginBtnInside = modal.querySelector("button");
  if(loginBtnInside){
    loginBtnInside.addEventListener("click", loginUser);
  }
}
