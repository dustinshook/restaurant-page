import { renderHeader, renderMain } from './js/landing-page';
import './css/style.css';

const content = document.getElementById('content');

[renderHeader(), renderMain()].forEach(section => content.appendChild(section));

