
function handleNavClick(event) {
    document.querySelectorAll('.link').forEach((item) => item.classList.remove('active'))
    event.currentTarget.classList.add('active');
    const navItems = document.getElementsByClassName('nav-item-mobile')[0];
    navItems.style.display = 'none';
}

function handleHamburgerClick(event) {
    const navItems = document.getElementsByClassName('nav-item-mobile')[0];
    if (navItems.style.display === 'none') {
        navItems.style.display = 'unset';
    }
    else {
        navItems.style.display = 'none';
    }

}

function handleFormSubmit(event) {
    console.log("Button Clicked");
    console.log(event.currentTarget);
}

export {handleNavClick,handleHamburgerClick, handleFormSubmit};