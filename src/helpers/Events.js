import AyushManishAgr from "../resources/Ayush_Manish_Agrawal_22.pdf";

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

function handleResumeDownload() {
    fetch(AyushManishAgr, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `Ayush_Manish_Agrawal_Resume.pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
}

function handleFormSubmit(event) {
    console.log("Button Clicked");
    console.log(event.currentTarget);
}

export {handleNavClick,handleHamburgerClick, handleFormSubmit, handleResumeDownload};