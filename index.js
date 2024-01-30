const burgerMenu = document.querySelector(".burger_menu");
const menu_dropdown = document.querySelector(".menu");

let isBurgerMenuActive = false;

burgerMenu.addEventListener("click", () => {

    if(!isBurgerMenuActive){
        menu_dropdown.classList.replace("inactive", "active")
        isBurgerMenuActive = true;
    }
    else{
        menu_dropdown.classList.replace("active", "inactive")
        isBurgerMenuActive = false;
    }

})