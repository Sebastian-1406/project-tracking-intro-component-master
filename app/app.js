let botonClose = document.querySelector(".nav__imagen-close");
let botonHamburger = document.querySelector(".nav__imagen-hamburger");

const desplegar = () => {
    let nav = document.querySelector(".nav__mobile");
    let navEnlace = document.querySelector(".nav__mobile-enlace")
    nav.classList.toggle("nav__mobile-activo");

    if(nav.classList[1] == "nav__mobile-activo"){
        navEnlace.style.animation = "aparecer 1s";
    }else{
        navEnlace.style.animation = "inherit";
    }
    
}


botonClose.addEventListener("click", desplegar);
botonHamburger.addEventListener("click", desplegar);