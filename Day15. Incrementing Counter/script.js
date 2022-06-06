const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = 0
    const target = +counter.getAttribute('data-target')

    const updateCounter = () => {
        const increment = target / 200
        const c = +counter.innerText
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)

        }
        else {
            counter.innerText = target
        }

    }

    updateCounter()
})

