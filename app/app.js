let botonClose = document.querySelector(".nav__imagen-close");
let botonHamburger = document.querySelector(".nav__imagen-hamburger");

const desplegar = () => {
    document.querySelector(".nav__mobile").classList.toggle("nav__mobile-activo");
    document.querySelector(".nav__mobile-enlace").style.animation = "aparecer 1s";
}

botonClose.addEventListener("click", desplegar);
botonHamburger.addEventListener("click", desplegar);