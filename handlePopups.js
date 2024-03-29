const cards = [
  {
    name: 'Tonic',
    title: ['Canopy', 'Back-End Developer', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './utils/Snapshoot-Portfolio3.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'www.google.com',
    source: 'www.google.com',
  },
  {
    name: 'Multi-Posts',
    title: ['Canopy', 'Back-End Developer', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './utils/Snapshoot-Portfolio4.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'www.google.com',
    source: 'www.google.com',
  },
  {
    name: 'Tonic',
    title: ['Canopy', 'Back-End Developer', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './utils/Snapshoot-Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'www.google.com',
    source: 'www.google.com',
  },
  {
    name: 'Multi-Posts',
    title: ['Canopy', 'Back-End Developer', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './utils/Snapshoot-Portfolio2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'www.google.com',
    source: 'www.google.com',
  },
];

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.is-open');
const closeMenu = document.querySelector('.close-menu');
const listMenu = document.querySelectorAll('.nav-menu-link');
const cardButton = document.querySelectorAll('.card-button');
const popup = document.querySelector('.popup');
const cardPopup = document.querySelector('.cardPopup');

function toggleMenu() {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}

function populateWorks(nthItem) {
  const card = cards[nthItem];
  const headerCover = document.createElement('div');
  headerCover.className = 'header-cover';
  cardPopup.appendChild(headerCover);

  const cardHeading = document.createElement('h2');
  cardHeading.className = 'popupHeading';
  cardHeading.textContent = card.name;
  headerCover.appendChild(cardHeading);

  const cardClosing = document.createElement('div');
  cardClosing.className = 'card-closing';
  headerCover.appendChild(cardClosing);
  cardClosing.addEventListener('click', () => {
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
      while (cardPopup.firstChild) {
        cardPopup.firstChild.remove();
      }
    } else {
      popup.style.display = 'block';
      populateWorks();
    }
  });

  const cardClosingIcon = document.createElement('i');
  cardClosingIcon.className = 'fas fa-times';
  cardClosing.appendChild(cardClosingIcon);

  const titleContainer = document.createElement('ul');
  titleContainer.className = 'title-container';
  cardPopup.appendChild(titleContainer);

  const titleElement = document.createElement('li');
  titleElement.className = 'item popup-item client';
  [titleElement.textContent] = [card.title[0]];
  titleContainer.appendChild(titleElement);

  const titleElementCircle = document.createElement('li');
  titleElementCircle.className = 'circle popup-item';
  titleContainer.appendChild(titleElementCircle);

  const titleElementCircleImg = document.createElement('img');
  titleElementCircleImg.src = './utils/Counter.svg';
  titleElementCircleImg.alt = 'circle popup-item';
  titleElementCircle.appendChild(titleElementCircleImg);

  const titleElement2 = document.createElement('li');
  titleElement2.className = 'item popup-item role';
  [titleElement2.textContent] = [card.title[1]];
  titleContainer.appendChild(titleElement2);

  const titleElementCircle2 = document.createElement('li');
  titleElementCircle2.className = 'circle popup-item';
  titleContainer.appendChild(titleElementCircle2);

  const titleElementCircleImg2 = document.createElement('img');
  titleElementCircleImg2.src = './utils/Counter.svg';
  titleElementCircleImg2.alt = 'circle';
  titleElementCircle2.appendChild(titleElementCircleImg2);

  const titleElement3 = document.createElement('li');
  titleElement3.className = 'item popup-item year';
  [titleElement3.textContent] = [card.title[2]];
  titleContainer.appendChild(titleElement3);

  const snapshot = document.createElement('div');
  snapshot.className = 'snapshot';
  snapshot.style.background = `url(${card.image})`;
  cardPopup.appendChild(snapshot);

  const footerContainer = document.createElement('div');
  footerContainer.className = 'popup-footer-container';
  cardPopup.appendChild(footerContainer);

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = card.description;
  footerContainer.appendChild(cardDescription);

  const footerButtonContainer = document.createElement('div');
  footerButtonContainer.className = 'popup-footer-button-container';
  footerContainer.appendChild(footerButtonContainer);

  const langList = document.createElement('div');
  langList.className = 'card-language-list';
  footerButtonContainer.appendChild(langList);

  card.technologies.forEach((item, index) => {
    const langListItem = document.createElement('div');
    langListItem.className = 'card-language-list-item';
    langList.appendChild(langListItem);

    const langListItemText = document.createElement('p');
    langListItemText.className = 'card-language-list-item-text';
    langListItemText.textContent = card.technologies[index];
    langListItem.appendChild(langListItemText);
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  footerButtonContainer.appendChild(buttonContainer);

  const button1 = document.createElement('button');
  button1.className = 'card-button card-button-size card-button-width';
  button1.textContent = 'See Live';
  buttonContainer.appendChild(button1);

  const button1Icon = document.createElement('i');
  button1Icon.className = 'fas fa-external-link-alt';
  button1.appendChild(button1Icon);

  const button2 = document.createElement('button');
  button2.className = 'card-button card-button-size card-button-width';
  button2.textContent = 'See Source';
  buttonContainer.appendChild(button2);

  const button2Icon = document.createElement('i');
  button2Icon.className = 'fab fa-github';
  button2.appendChild(button2Icon);
}

hamburgerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
listMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
cardButton.forEach((item) => {
  item.addEventListener('click', () => {
    const nthItem = item.className.split(' ')[1];
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
    } else {
      popup.style.display = 'block';
      populateWorks(nthItem);
    }
  });
});
