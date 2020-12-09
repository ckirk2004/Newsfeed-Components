// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

let header = document.querySelector('.header')


 function menuMaker (menuItems){
  let menu = document.createElement('div');
  let list = document.createElement('ul');
  menu.classList.add('menu')


  let menuButton = document.querySelector('.menu-button')
    menuButton.addEventListener('click', () => {
         menu.classList.toggle('menu--open')

    })


  menuItems.forEach( items => {
    let item = document.createElement('li')
    item.textContent = items
    list.appendChild(item)
  });
  menu.appendChild(list)
  return header.appendChild(menu)
}

menuMaker(menuItems)

