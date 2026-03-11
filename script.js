const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

if (hamburger) {
    hamburger.addEventListener('click', handleHamburgerClick);

    document.addEventListener('click', function(e) {
        const isNavOpen = navMenu.classList.contains('open');
        const clickedNavLink = e.target.closest('nav a');
        if (isNavOpen && clickedNavLink) {
            handleHamburgerClick();
        }
    });
}

function handleHamburgerClick(){
    if(hamburger.classList.contains('closed')){
        hamburger.classList.remove('closed');
        hamburger.classList.add('opened');
        navMenu.classList.add('open');
        hamburger.src = 'assets/hamburger-closed.svg';
    } else {
        hamburger.classList.remove('opened');
        hamburger.classList.add('closed');
        navMenu.classList.remove('open');
        hamburger.src = 'assets/hamburger.svg';
    }
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navBar');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// tab bar js
function switchTab(index) {
    const panels = document.querySelectorAll('.tab-panel');
    const buttons = document.querySelectorAll('.tab-btn');
    panels.forEach(p => p.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));
    panels[index].classList.add('active');
    buttons[index].classList.add('active');
}
document.addEventListener("DOMContentLoaded",function() {
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    simulateTouch: false,  // add this
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:    { slidesPerView: 1 },
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.card-item').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        lightboxImg.src = card.querySelector('.card-image').src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});