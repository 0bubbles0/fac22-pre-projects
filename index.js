// Toggle Dark Mode
const body = document.documentElement;
const logo = document.querySelector('#img-logo');
const darkSwitch = document.querySelector('#dark-mode-switch');
const darkButton = document.querySelector('#dark-mode-checkbox');
const darkLabel = document.querySelector('#dark-mode-label');

function switchOutlineOn() {
  darkSwitch.style.outline = '1px dotted red';
}

function switchOutlineOff() {
  darkSwitch.style.outline = '0';
}

function switchDark(e) {
  if (e.target.checked) {
    body.classList.add('dark');
    logo.src = 'resources/img/logo/logo-250-100-dark.png';
    darkLabel.textContent = 'To Light Mode';
  } else {
    body.classList.remove('dark');
    logo.src = 'resources/img/logo/logo1-250-100.png';
    darkLabel.textContent = 'To Dark Mode';
  }
}

darkButton.addEventListener('focus', switchOutlineOn);
darkButton.addEventListener('focusout', switchOutlineOff);
darkButton.addEventListener('change', switchDark);
