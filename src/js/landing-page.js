import "../css/style.css"

const renderHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';

    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    nav.appendChild(ul);

    const logo = document.createElement('li');
    logo.classList.add('nav-item', 'logo');
    ul.appendChild(logo);

    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.textContent = 'El Código Cantina';
    logo.appendChild(logoLink);

    ['Menu', 'Contact'].forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = item;

        li.appendChild(link);
        ul.appendChild(li);
    }); 

    return header;
};

const renderMain = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const message = document.createElement('div');
    message.classList.add('message');
    main.appendChild(message);

    const messageText = document.createElement('p');
    messageText.textContent = 'Grand Opening! Come and enjoy our delicious food and drinks!';
    message.appendChild(messageText);
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    main.appendChild(hero);

    const heroButton = document.createElement('div');
    heroButton.classList.add('button');
    heroButton.textContent = 'Order Now';
    hero.appendChild(heroButton);

    return main;
};


const landingPage = () => {
    const elm = document.createElement('div');
    elm.textContent = 'Landing Page';

    return elm;
};

export { renderHeader, renderMain, landingPage }