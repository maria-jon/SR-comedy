import './style.scss';
import { createHtml } from './src/js/createHtml';
import { toggleDarkMode } from './src/js/toggleDarkMode';

function init() {
  toggleDarkMode();
  createHtml();
}

init();

// add red border when in develop
if (import.meta.env.DEV) {
  document.body.style.border = '3px solid red';
  console.warn('Develop');
}