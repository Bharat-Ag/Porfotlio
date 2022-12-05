let tabLinks = document.getElementsByClassName("tab-links");
let tabCtnts = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabCtnt of tabCtnts) {
        tabCtnt.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------------------Navbar animation---------
let nav = document.querySelector(".navbar-menu");

window.addEventListener('scroll', () => {
    console.log(scroll);

    if (window.pageYOffset > 250) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
});


// --------------------small screen Navmenu animation---------

let menu = document.querySelector("#side-menu");
let menuNav = document.querySelector(".navbar-menu")

function openMenu() {
    menu.classList.toggle("openmenu");
}
function closeMenu() {
    menu.classList.remove("openmenu");
}
window.addEventListener('click', (e) => {
    if (!menuNav.contains(e.target)) {
        menu.classList.remove("openmenu");
    }
})

// --------------------service section animation---------

let svr = document.querySelector(".services-list")
const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        ent.isIntersecting == false
            ? svr.classList.remove("card_play")
            : svr.classList.add("card_play");
    }, {
    root: null,
    rootMargin: "",
    threshold: 0.2,

});

observer.observe(svr);


// --------------------scroll to up animation---------


let scrlBtn = document.querySelector(".scroll-btn")

window.addEventListener('scroll', () => {

    if (window.pageYOffset >= 700) {
        scrlBtn.classList.add("active");
    }
    else {
        scrlBtn.classList.remove("active");
    }
})


// --------------------theme change animation---------


let theme = document.querySelector(".theme-change");
let mainContainer = document.querySelector("body");


const themeChnage = () => {
    mainContainer.classList.toggle("theme-changed");
    document.getElementById("header").style.backgroundImage = "url(green-paint-brush-textured-background.jpg)";

}