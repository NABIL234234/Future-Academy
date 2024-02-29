const burgerMenu = document.querySelector(".burger_menu");
const menu_dropdown = document.querySelector(".menu");
const video_containerBlock = document.querySelector(".video_container");
const mbankBlock = document.querySelector(".mbank");
const it_academyBlock = document.querySelector(".it_academy");
const itBlock = document.querySelector(".it");
const dodo_pizzaBlock = document.querySelector(".dodo_pizza");
const beelienBlock = document.querySelector(".beelien");
const careerBlock = document.querySelector(".career");
const chessBlock = document.querySelector(".chess");



video_containerBlock.onclick = () => {
  window.location.href = "https://youtu.be/XPLACPm_TzE";
};
beelienBlock.onclick = () => {
  window.location.href = "https://beeline.kg/ru/products/tariffs";
};
dodo_pizzaBlock.onclick = () => {
  window.location.href = "https://dodopizza.kg/bishkek";
};

it_academyBlock.onclick = () => {
  window.location.href = "https://it-academy.kg/";
};
mbankBlock.onclick = () => {
  window.location.href =
    "https://mbank.kg/credits/online-kredit?utm_source=google&utm_medium=cpc&utm_campaign=credits_poisk&utm_content=adapt_online2&utm_term=%D0%BC%20%D0%B1%D0%B0%D0%BD%D0%BA%20%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82&gclid=CjwKCAiA2pyuBhBKEiwApLaIO7mJnnPX99aMALN22YpdjF5J3kPDrIOMdvPR6tPrEw02UvzO9qXo1BoC1HAQAvD_BwE";
};
itBlock.onclick = () => {
  window.location.href = "https://fait.netlify.app";
};
careerBlock.onclick = () => {
  window.location.href = "https://facareer.netlify.app";
};
chessBlock.onclick = () => {
  window.location.href = "https://fachess.netlify.app";
};

let isBurgerMenuActive = false;

burgerMenu.addEventListener("click", () => {
  if (!isBurgerMenuActive) {
    menu_dropdown.classList.replace("inactive", "active");
    isBurgerMenuActive = true;
  } else {
    menu_dropdown.classList.replace("active", "inactive");
    isBurgerMenuActive = false;
  }
});

const mySlider = new Splide("#mySlider", {
  perPage: 2,
  pagination: false,
  breakpoints: {
    1024: {
      perPage: 1,
    },
    768: {
      arrows: false,
      pagination: true,
    },
  },
});

mySlider.mount();

console.log('Hello World!!!');