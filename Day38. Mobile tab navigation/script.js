
const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        resetSelectedMenu()
        item.classList.add('menu-item-active')
        pickRandomImage()
    })
})

function resetSelectedMenu(){
    menuItems.forEach(item=>{
        item.classList.remove('menu-item-active')
    })
    
}

function pickRandomImage(){
    const mobileScreen = document.querySelector('.mobile-screen')
    mobileScreen.innerHTML = ''
    var img = new Image();
    img.classList.add('mobile-screen')
    img.src = 'https://source.unsplash.com/random'    
    mobileScreen.appendChild(img)
}
