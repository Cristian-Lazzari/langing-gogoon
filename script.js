window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navimg = document.getElementById('navimg');
    const navlink = document.querySelectorAll('.navlink');
    const scrollHeight = window.innerHeight;

    if (window.scrollY >= scrollHeight) {
        navbar.classList.add('navbar-scrolled');
        navimg.classList.add('navimg-scrolled');
        navlink.forEach(element => {
            
            element.classList.add('navlink-scrolled');
        });
    } else {
        navbar.classList.remove('navbar-scrolled');
        navimg.classList.remove('navimg-scrolled');
        navlink.forEach(element => {
            
            element.classList.remove('navlink-scrolled');
        });
    }
});