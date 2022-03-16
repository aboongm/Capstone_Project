const hamburger = document.querySelector('#hamburger');
const cancel = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');

// hamburger menu
hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  cancel.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

cancel.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
  cancel.classList.add('hide');
});
