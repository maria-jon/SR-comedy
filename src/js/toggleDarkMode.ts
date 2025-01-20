import log from './log';

const toggleDarkModeButton = document.querySelector('.btn--toggle') as HTMLButtonElement;
toggleDarkModeButton.addEventListener('click', toggleDarkMode);
log(toggleDarkModeButton);

export function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeButton.innerHTML = 'Välj mörkt läge';
    log('mörkt läge');
  } else {
    toggleDarkModeButton.innerHTML = 'Välj ljust läge';
    log('ljust läge');
  }
}

export default toggleDarkMode;
