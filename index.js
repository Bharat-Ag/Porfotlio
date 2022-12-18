// --------------------Pre loader-----------

let loader = document.querySelector(".loader")

window.addEventListener('load', loading = () => {
    loader.style.display = "none";
    document.body.style.overflow = "unset"
})




// --------------------Teb Section---------

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
let body = document.querySelector("body");

let thmIcon = document.querySelector(".theme-icon")
let toggle = true;
const themeChnage = () => {
    body.classList.toggle("theme-changed");

    toggle = !toggle;
    if (toggle) {
        thmIcon.src = "color-filled-solid-24.png";
        // loader.style.display = "flex";
        // setTimeout(() => {
        //     loader.style.display = "none";
        // }, 1000);
    }
    else {
        thmIcon.src = "color-empty-solid-24.png";
        // loader.style.display = "flex";
        // setTimeout(() => {
        //     loader.style.display = "none";
        // }, 1000);

    }
    // --------------------theme change animation funtion call hua h yaha---------

    cooKy();

}

// --------------------theme change animation funtion definition---------

let getTheme = localStorage.getItem("mode");

if (getTheme && getTheme === "theme-changed") {

    body.classList.add("theme-changed");
}

let cooKy = () => {
    if (!body.classList.contains("theme-changed")) {
        return localStorage.setItem("mode", "normal-theme")
    }
    else {
        localStorage.setItem("mode", "theme-changed")
    }
}



// --------------------parallax effect---------


let bird1 = document.querySelector(".bd1");
let bird2 = document.querySelector(".bd2");
let headerText = document.querySelector(".header-text")


window.addEventListener("scroll", function () {

    let value = window.scrollY;

    headerText.style.opacity = 50 + value * -0.5;

    bird1.style.top = 25 + value * -.2 + "%";
    bird1.style.left = 20 + value * -.2 + "%";

    // bird2.style.width = 150 + value * 1 + "px";
    // bird2.style.right = 50 + value * -2 + "%";




})