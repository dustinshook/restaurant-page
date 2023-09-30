import "../css/style.css";

const renderContact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactTitle = document.createElement('span');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact Us';

    contactInfo.appendChild(contactTitle);

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text', 'phone');
    contactText.textContent = '123-456-7890';

    contactInfo.appendChild(contactText);

    const contactText2 = document.createElement('div');
    contactText2.classList.add('contact-text', 'email');
    contactText2.textContent = 'codigocantina@fake.com';

    contactInfo.appendChild(contactText2);

    contactContainer.appendChild(contactInfo);

    const mapTitle = document.createElement('span');
    mapTitle.classList.add('contact-title');
    mapTitle.textContent = 'Find Us';

    contactContainer.appendChild(mapTitle);

    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.289359685609!2d-122.35185232255587!3d47.62050627119108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1696100407869!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    contactContainer.appendChild(mapContainer);

    const socialTitle = document.createElement('span');
    socialTitle.classList.add('contact-title');
    socialTitle.textContent = 'Follow Us';

    contactContainer.appendChild(socialTitle);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('contact-buttons-container');
    

    ['Twitter', 'Facebook', 'Instagram'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', 'contact-btn');
        heroButton.textContent = item;
        heroButton.id = item.split(' ').join('').toLowerCase();
        buttonsContainer.appendChild(heroButton);
    });

    contactContainer.appendChild(buttonsContainer);


    return contactContainer;
};

export { renderContact };