let boton = document.querySelector(".nav__imagen-icon");
const desplegar = () => {
    let nav = document.querySelector(".nav__mobile");
    let navImagen = document.querySelector(".nav__imagen-icon");
    nav.classList.toggle("nav__mobile-activo");

    if(nav.classList[1] == "nav__mobile-activo"){
        document.querySelector(".nav__mobile-enlace").style.animation = "aparecer 1s";
        navImagen.src = "../images/icon-close.svg";
    }else{
        document.querySelector(".nav__mobile-enlace").style.animation = "desaparecer 1s";
        navImagen.src = "../images/icon-hamburger.svg";
    }
    
}


boton.addEventListener("click", desplegar);