import "../css/style.css";

const renderMenu = (menuObj) => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    Object.keys(menuObj.menu).forEach((category) => {
        const categoryWrapper = document.createElement('div');
        categoryWrapper.classList.add('category-wrapper');

        const categoryTitle = document.createElement('span');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;

        categoryWrapper.appendChild(categoryTitle);

        const categoryItems = document.createElement('ul');
        categoryItems.classList.add('category-items', category.toLowerCase());

        const categoryItemsArray = menuObj.menu[category];

        categoryItemsArray.forEach((item) => {
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('category-item');

            const itemName = document.createElement('span');
            itemName.textContent = item;

            categoryItem.appendChild(itemName);
            categoryItems.appendChild(categoryItem);
        });

        categoryWrapper.appendChild(categoryItems);
        menuContainer.appendChild(categoryWrapper);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('menu-buttons-container');
    menuContainer.appendChild(buttonsContainer);

    ['Reservations', 'Order Online'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', 'menu-btn');
        heroButton.textContent = item;
        heroButton.id = item.split(' ').join('').toLowerCase();
        buttonsContainer.appendChild(heroButton);
    });

    return menuContainer;
};

export { renderMenu };
