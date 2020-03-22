
$(document).ready(function (){
    // Filtration
    $('#portfolio-project-filter').mixItUp();

    //Nav page navigation
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentlistItem) {}
    });

    // click for Hamburger menue
    const hamburgerBtn = document.querySelector('.header__burger');
    const mobileMenue = document.querySelector('.header__navigation-block');
    const bodyElement = document.querySelector('body');
    const overlayElement = document.querySelector('.overlay');
    const checkedInput = document.querySelector('.header__burger-checkbox');

    hamburgerBtn.addEventListener('click', function() {
        mobileMenue.classList.toggle('active');
        bodyElement.classList.toggle('noscroll');
        overlayElement.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        mobileMenue.classList.remove('active');
        bodyElement.classList.remove('noscroll');
        overlayElement.classList.remove('active');
        checkedInput.checked = false;
    });

    // Fixed navigation 
    window.onscroll = function showNav() {
        let navFixed = document.querySelector('.header__navigation');
        

        if(window.pageYOffset > 200) {
            navFixed.classList.add('nav-fixed');
        } else {
            navFixed.classList.remove('nav-fixed');
        }
    }
})

