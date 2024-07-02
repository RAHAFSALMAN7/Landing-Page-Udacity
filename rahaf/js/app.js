document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Dynamically create the navigation menu
    sections.forEach(section => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.classList.add('menu__link');
        anchor.textContent = section.getAttribute('data-nav');
        anchor.href = `#${section.id}`;
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    // Smooth scrolling when clicking on links
    navList.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.nodeName === 'A') {
            const sectionId = event.target.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Highlight the active section when scrolling
    function makeActive() {
        sections.forEach(section => {
            const box = section.getBoundingClientRect();
            if (box.top <= 150 && box.bottom >= 150) {
                section.classList.add('your-active-class');
                const navLink = document.querySelector(`a[href="#${section.id}"]`);
                navLink.classList.add('active-link');
            } else {
                section.classList.remove('your-active-class');
                const navLink = document.querySelector(`a[href="#${section.id}"]`);
                navLink.classList.remove('active-link');
            }
        });
    }

    document.addEventListener('scroll', makeActive);

    // Ensure the page starts with the first section highlighted
    makeActive();
});
