import data from './data.js'

const mainMenu = document.querySelectorAll('.menu__item')
const subMenu = document.querySelector('.sub-menu')
const HOST = 'server.com/';

let activeItem = null


mainMenu.forEach(item => {

    item.addEventListener('mouseenter', () => {
        showSubMenu(item)
        const hoveredMenu = item.innerText
        populateSubMenuData(data.menus[hoveredMenu] == null ? data.menus['Home'] : data.menus[hoveredMenu])
    })


});
function populateSubMenuData(menu) {
    console.log(menu.top)
    const categories = document.getElementsByClassName('menu__sub__categories__category')
    const topCategory = categories[0].querySelector('.menu__sub__categories__items')
    const additionalCategory = categories[1].querySelector('.menu__sub__categories__items')
    const visualImg = document.querySelector('.menu__sub__visual')
    topCategory.innerHTML = ''
    additionalCategory.innerHTML = ''
    visualImg.innerHTML = ''
    // Top Categories
    menu.top.forEach(item => {
        topCategory.innerHTML += `<li class="menu__sub__categories__item">
        ${item}
    </li>`
    })
    // Additional Categories
    menu.additional.forEach(item => {
        additionalCategory.innerHTML += `<li class="menu__sub__categories__item">
        ${item}
    </li>`
    })
    visualImg.innerHTML = `<img class="menu__sub__visual__img"
    src="${menu.visual}" />`

    // Default
}
function showSubMenu(item) {
    subMenu.classList.remove('hidden')
    if (activeItem) {
        activeItem.classList.remove('menu__main__item--hovered')
    }

    item.classList.add('menu__main__item--hovered')
    activeItem = item

}
subMenu.addEventListener('mouseleave', () => hideSubMenu())

const hideSubMenu = () => {
    subMenu.classList.add('hidden')
    activeItem.classList.remove('menu__main__item--hovered')
    activeItem = null
}

