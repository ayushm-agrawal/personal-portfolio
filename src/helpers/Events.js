// import {useHistory} from "react-router-dom"

function handleNavClick(event) {
    const bar = document.getElementsByClassName('bars')[0];
    const cross = document.getElementsByClassName('cross')[0];

    document.querySelectorAll('.link').forEach((item) => item.classList.remove('active'))
    event.currentTarget.classList.add('active');
    const navItems = document.getElementsByClassName('nav-item-mobile')[0];
    navItems.style.display = 'none';
    bar.style.display = 'block';
    cross.style.display = 'none';
}

function handleHamburgerClick() {
    const navItems = document.getElementsByClassName('nav-item-mobile')[0];
    const bar = document.getElementsByClassName('bars')[0];
    const cross = document.getElementsByClassName('cross')[0];

    if (navItems.style.display === 'none') {
        bar.style.display = 'none';
        cross.style.display = 'block';
        navItems.style.display = 'unset';
    }
    else {
        bar.style.display = 'block';
        cross.style.display = 'none';
        navItems.style.display = 'none';
    }

}

function handleBrandClick() {
    // const history = useHistory();
    // history.push("/")
    console.log("Click")
}

function handleFormSubmit(event) {
    console.log("Button Clicked");
    console.log(event.currentTarget);
}

export {handleNavClick,handleHamburgerClick, handleFormSubmit, handleBrandClick};