import "../css/style.css";
import tacos from "../assets/images/jeswin-thomas-z_PfaGzeN9E-unsplash.jpg";
import salsa from "../assets/images/victor-VTHliTT2XGI-unsplash.jpg";
import sandwich from "../assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg";
import carnitas from "../assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg";


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

const renderContentCards = (...images) => {
    const contentCards = document.createElement('div');
    contentCards.classList.add('content-cards');

    images.forEach((image) => {
        const contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        contentCards.appendChild(contentCard);

        const img = document.createElement('img');
        img.src = image;
        contentCard.appendChild(img);

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        contentCard.appendChild(cardText);

        const cardTextTitle = document.createElement('h2');
        cardTextTitle.textContent = 'Tacos';
        cardText.appendChild(cardTextTitle);

        const cardTextDescription = document.createElement('p');
        cardTextDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam.';
        cardText.appendChild(cardTextDescription);
    });

    return contentCards;
};

const renderMain = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const message = document.createElement('div');
    message.classList.add('message');
    main.appendChild(message);

    const messageText = document.createElement('p');
    messageText.textContent = 'Grand Opening!';
    message.appendChild(messageText);
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    main.appendChild(hero);

    const heroButton = document.createElement('div');
    heroButton.classList.add('button');
    heroButton.textContent = 'Order Now';
    hero.appendChild(heroButton);

    const contentTitle = document.createElement('h1');
    contentTitle.textContent = 'Cantina favorites';
    main.appendChild(contentTitle);

    const contentCards = renderContentCards(tacos, salsa, sandwich, carnitas);
    main.appendChild(contentCards);

    return main;
};


const landingPage = () => {
    const elm = document.createElement('div');
    elm.textContent = 'Landing Page';

    return elm;
};

export { renderHeader, renderMain, landingPage }