const up = document.querySelector(".up");
const navbar = document.querySelector(".navbar");
up.onclick =() => {
    window.scrollTo(0,0);
}
window.onscroll=() => {
    if (window.scrollY >= 500){
        up.style.display="block";
        navbar.classList.add("navbar-bg");
    }else {
        up.style.display="none";
        navbar.classList.remove("navbar-bg");
    }
}
