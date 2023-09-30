import { renderHeader, renderMain, renderFooter } from './js/landing-page';
import { renderMenu } from './js/menu-page';
import { renderContact } from './js/contact-page';
import menu from "./assets/data/menu.json";
import './css/style.css';

const content = document.querySelector('#content');
[renderHeader(), renderMain(), renderFooter()].forEach(section => content.appendChild(section));


content.querySelectorAll('.nav-item').forEach((element, index) => {
    /* tab switching logic */
    element.addEventListener('click', () => {
        const currentDisplay = document.querySelector('#content').children[1];

        switch (index) {
            case 0:
                content.replaceChild(renderMain(), currentDisplay);
                break;
            case 1:
                content.replaceChild(renderMenu(menu), currentDisplay);
                break;
            case 2:
                content.replaceChild(renderContact(), currentDisplay);
                break;
        }
    });

});


