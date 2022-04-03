
function handleNavClick(event) {
    document.querySelectorAll('.link').forEach((item) => item.classList.remove('active'))
    event.currentTarget.classList.add('active');
    handleHamburgerClick(event);
}

function handleHamburgerClick(event) {
    const navItems = document.getElementsByClassName('nav-item-mobile')[0];
    console.log(navItems)
    if (navItems.style.display === 'none') {
        navItems.style.display = 'unset';
    }
    else {
        navItems.style.display = 'none';
    }

}

export {handleNavClick,handleHamburgerClick};