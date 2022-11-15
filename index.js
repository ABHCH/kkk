const navbar = document.getElementById("navbar");
const cardContainer = document.querySelector(".recipies-card-container");
const recipieContainer = document.querySelector(".all-recipies");
const navList = document.querySelector(".list");
const menuBar = document.querySelector(".menu-bar");

// for sticky navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    navbar.classList.add("changeBg");
  } else {
    navbar.classList.remove("changeBg");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  data.forEach((myContent) => {
    const html = ` <div class="card-1">
        <img class="recipie-img" src="${myContent.cardImage}" alt="">
        <div class="card-desc">
            <div class="name-recpies">${myContent.foodName}</div>
        <div class="recipie-author-name">${myContent.authorName}</div>
        <div class="cooking-tips">${myContent.recpies}</div>
        </div>
    </div>`;
    cardContainer.insertAdjacentHTML("afterbegin", html);
  });

  data2.forEach((myRecipies) => {
    const html = ` <div class="recipies-1">
        <img class="recipies-img" src="${myRecipies.cardImage}" alt="">
         <div class="recipes-name">${myRecipies.foodName}</div>
        </div>`;
    recipieContainer.insertAdjacentHTML("afterbegin", html);
  });
});

menuBar.addEventListener("click", () => {
  if (navList.style.right == "-100%") {
    navList.style.right = "0%";
  } else {
    navList.style.right = "-100%";
  }
});


const APIKEY = "a3764e14-a91d-45dd-a593-dc82b2a115ee"
const url  = `https://forkify-api.herokuapp.com/api/v2/recipes?pizza&${APIKEY}`

fetch(url).then((res) => res.json()).then((data) => console.log(data));