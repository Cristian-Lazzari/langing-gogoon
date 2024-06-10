
let navOpen = false;
const burg = document.getElementById('burg');
const navbar = document.getElementById('navbar');
const navimg = document.getElementById('navimg');
const navlink = document.querySelectorAll('.navlink');
const l = document.querySelectorAll('.l');

let link = document.querySelector('.link');
function openNav(){
    navOpen = !navOpen;
    if(!navOpen) {
        link.classList.add('link-off');
        burg.classList.remove('off');
    }else{
        burg.classList.add('off');
        link.classList.remove('link-off');
    }  
}

burg.addEventListener('click', openNav);


window.addEventListener('scroll', function() {
    const scrollHeight = window.innerHeight;

    if (window.scrollY >= scrollHeight) {
        navbar.classList.add('navbar-scrolled');
        navimg.classList.add('navimg-scrolled');
        navlink.forEach(element => {     
            element.classList.add('navlink-scrolled');
        });
        l.forEach(element => {     
            element.classList.remove('l-scrolled');
        });
    } else {
        navbar.classList.remove('navbar-scrolled');
        navimg.classList.remove('navimg-scrolled');
        navlink.forEach(element => {     
            element.classList.remove('navlink-scrolled');
        });
        l.forEach(element => {     
            element.classList.add('l-scrolled');
        });
    }
});