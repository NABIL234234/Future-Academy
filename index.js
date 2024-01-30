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


const mySlider = new Splide('#mySlider',{
    perPage:2,
    breakpoints: {
        1024: {
            perPage:1
        },
        768: {
            arrows: false,
            
        }
    }
})

mySlider.mount()