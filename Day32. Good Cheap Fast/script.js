const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(element => {
    element.addEventListener('change', (e) => {
        if (cheap.checked && good.checked && fast.checked) {
            if (e.target === good) {
                fast.checked = false
            } else if (e.target === cheap) {
                good.checked = false
            } else if (e.target === fast) {
                cheap.checked = false
            }
        }
    })
});
