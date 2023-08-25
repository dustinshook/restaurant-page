import landingPage from './js/landing-page';
import './css/style.css';

const content = document.getElementById('content');
const elm = landingPage();

elm.classList.add('warning');

content.appendChild(elm);

