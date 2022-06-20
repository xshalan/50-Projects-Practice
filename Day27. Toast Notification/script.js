const showNotification = document.getElementById('notification-btn')
const notificationContainer = document.querySelector('.notification-container')
const messages =['Message One','Message Two','Toast Message Three','Message Four']
const colors = ['red','green','rebeccapurple']
showNotification.addEventListener('click',()=>{
    let selectedMessage = messages[Math.floor(Math.random() * messages.length)];
    let selectedColor = colors[Math.floor(Math.random() * colors.length)];
    
    showNotificationDiv(selectedMessage,selectedColor)

})

const showNotificationDiv = (message,color)=>{
    let divEl = document.createElement('div')
    divEl.classList.add('notification')
    divEl.innerHTML = `
    <small style="color: ${color};">${message}</small>
    `
    notificationContainer.appendChild(divEl)
    setTimeout(()=>{
        notificationContainer.removeChild(divEl)
    },5000)
}

