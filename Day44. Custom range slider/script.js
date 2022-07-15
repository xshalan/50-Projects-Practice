const slider = document.getElementById('range')
slider.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_range_width = range_width.substring(0,range_width.length-2)
    const label_range_width = range_width.substring(0,label_width.length-2)


    const max = +e.target.max
    const min = +e.target.min
    const left = value * (num_range_width / max) - label_range_width / 2 + scale(value, min, max, 10, -10)


    label.innerHTML = value

    label.style.left = `${left}px`
})  


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
