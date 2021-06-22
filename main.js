//Card Objects
let cards = [
  {
    name: 'Tonic',
    title: ['Canopy', 'Back-end Developer','2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './utils/Snapshoot-Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live : 'www.google.com',
    source: 'www.google.com',
  }
]

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.is-open');
const closeMenu = document.querySelector('.close-menu');
const listMenu = document.querySelectorAll('.nav-menu-link');
const cardButton = document.querySelectorAll('.card-button')
const popup = document.querySelector('.popup')
const cardPopup = document.querySelector('.cardPopup')

function toggleMenu() {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}

function populateWorks() {
  //const projectCardGrid = cardPopup;
  const headerCover = document.createElement('div');
  headerCover.className = 'header-cover';
  cardPopup.appendChild(headerCover)
  
  const cardHeading = document.createElement('h2');
  cardHeading.className = 'popupHeading';
  cardHeading.textContent = cards[0]['name'];
  headerCover.appendChild(cardHeading)

  const cardClosing = document.createElement('i');
  cardClosing.className = 'fas fa-times';
  headerCover.appendChild(cardClosing)

  const titleContainer = document.createElement('ul');
  titleContainer.className = 'title-container';
  cardPopup.appendChild(titleContainer)

  const titleElement = document.createElement('li')
  titleElement.className = 'item client'
  titleElement.textContent = cards[0]['title'][0]
  titleContainer.appendChild(titleElement)

  const titleElementCircle = document.createElement('li')
  titleElementCircle.className = 'circle'
  titleContainer.appendChild(titleElementCircle)

  const titleElementCircleImg = document.createElement('img')
  titleElementCircleImg.src = './utils/Counter.svg'
  titleElementCircleImg.alt = 'circle'
  titleElementCircle.appendChild(titleElementCircleImg)

  const titleElement2 = document.createElement('li')
  titleElement2.className = 'item role'
  titleElement2.textContent = cards[0]['title'][1]
  titleContainer.appendChild(titleElement2)

  const titleElementCircle2 = document.createElement('li')
  titleElementCircle2.className = 'circle'
  titleContainer.appendChild(titleElementCircle2)

  const titleElementCircleImg2 = document.createElement('img')
  titleElementCircleImg2.src = './utils/Counter.svg'
  titleElementCircleImg2.alt = 'circle'
  titleElementCircle2.appendChild(titleElementCircleImg2)

  const titleElement3 = document.createElement('li')
  titleElement3.className = 'item year'
  titleElement3.textContent = cards[0]['title'][2]
  titleContainer.appendChild(titleElement3)

  const snapshot = document.createElement('div');
  snapshot.className = 'snapshot';
  snapshot.style.background = `url(${cards[0]['image']})`;
  cardPopup.appendChild(snapshot);
}

function openPopup() {
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
  populateWorks()
}



// createElement helper function
function createElement(type, parent, classList) {
  const element = document.createElement(type);
  if (classList !== undefined) {
      typeof classList === 'Array' && classList.length > 0
          ? element.classList.add(...classList)
          : (element.className = classList);
  }
  parent.append(element);
  return element;
}

hamburgerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
listMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
cardButton.forEach((item) => {
  item.addEventListener('click', openPopup);
});
