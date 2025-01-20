import './style.scss';
import { createHtml } from './src/js/createHtml';
import { toggleDarkMode } from './src/js/toggleDarkMode';

function init() {
  toggleDarkMode();
  createHtml();
}

init();
