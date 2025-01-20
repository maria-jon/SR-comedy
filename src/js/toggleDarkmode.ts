const toggleDarkModeButton = document.querySelector('.toggle-btn') as HTMLButtonElement;
toggleDarkModeButton.addEventListener('click', toggleDarkMode);
console.log(toggleDarkModeButton);

export function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeButton.innerHTML = 'Välj mörkt läge';
    console.log('mörkt läge');
  } else {
    toggleDarkModeButton.innerHTML = 'Välj ljust läge';
    console.log('ljust läge');
  }
}

export default toggleDarkMode;
