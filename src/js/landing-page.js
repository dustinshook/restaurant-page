import "../css/style.css";
import content1 from "../assets/images/jarritos-mexican-soda-9AR5vmA4jiU-unsplash.jpg";
import content2 from "../assets/images/jarritos-mexican-soda-uNcoDU4DAFw-unsplash.jpg";
import content3 from "../assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg";
import content4 from "../assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg";
import content5 from "../assets/images/jarritos-mexican-soda-ke_i6RkslpU-unsplash.jpg";


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

const renderLowerSection = () => {
    const hero = document.createElement('div');
    hero.classList.add('hero2');

    ['Menu', 'Contact'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', item.toLowerCase());
        heroButton.textContent = item;
        heroButton.id = item.toLowerCase();
        hero.appendChild(heroButton);
    });

    return hero;
};

const renderFooter = () => {
    const footer = document.createElement('div');
    footer.id = 'footer';

    const footerText = document.createElement('p');
    footerText.textContent = '© 2023 El Código Cantina';
    footer.appendChild(footerText);

    const photoCredit = document.createElement('p');
    photoCredit.innerHTML = `
    Photos by <a href="https://unsplash.com/@jarritos">Jarritos Mexican Soda</a> on <a href="https://unsplash.com">Unsplash</a>
    `;
    footer.appendChild(photoCredit);

    return footer;
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

    const contentCards = renderContentCards(content1, content2, content3, content4, content5);
    main.appendChild(contentCards);

    const lowerSection = renderLowerSection();
    main.appendChild(lowerSection);

    return main;
};

export { renderHeader, renderMain, renderFooter }