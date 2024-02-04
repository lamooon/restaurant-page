// main page
import home from './home';
import menu from './menu';
import contact from './contact';

function navigate() {
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            let tabToLoad = tab.id;

            switch (tabToLoad) {
                case "menu":
                    menu();
                    break;
                case "home":
                    home();
                    break;
                case "contact":
                    contact();
                    break;
            }
        })
    })
}

function footer() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `© ${new Date().getFullYear()} lamooon`;
    return footer;
}

function homePage() {
    const content = document.getElementById('content');
    navigate();
    content.appendChild(footer());
    home();

    return content;
}

homePage();