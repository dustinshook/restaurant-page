import { renderHeader, renderMain, renderFooter } from './js/landing-page';
import { menuLogger } from './js/menu-page';
import './css/style.css';

const content = document.getElementById('content');

[renderHeader(), renderMain(), renderFooter()].forEach(section => content.appendChild(section));

menuLogger();

