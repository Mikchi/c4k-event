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