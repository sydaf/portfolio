const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelector('.menu social-icons, nav-list')

    // Toggle sideNav
    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');

        // Burger animation
        burger.classList.toggle('toggle')
    })
};

navSlide();