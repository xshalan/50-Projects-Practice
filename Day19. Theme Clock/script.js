const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const toggle_theme = document.querySelector('.mode-toggle')

toggle_theme.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggle_theme.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        toggle_theme.innerHTML = 'Light mode'
    }
})

function scaleValue(value, from, to) {
    var scale = (to[1] - to[0]) / (from[1] - from[0]);
    var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
    return ~~(capped * scale + to[0]);
}


function setTime() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const ampm = hour >= 12 ? 'PM' : 'AM'
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scaleValue(second, [0, 59], [0, 360])}deg)`

    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scaleValue(minute, [0, 59], [0, 360])}deg)`

    hourEl.style.transform = `translate(-50%,-100%) 
    rotate(${scaleValue(hour % 12, [0, 11], [0, 360])}deg)`
    timeEl.innerHTML = `${hour % 12}:${(minute) < 10 ? `0${minute}` : minute}${ampm}`
    dateEl.innerHTML = `${daysInWeek[date.getDay()]}, ${month[date.getMonth()]} <span class="date-day">${date.getDate()}</span>`
    console.log()
}

setTime()
setInterval(setTime, 1000)
