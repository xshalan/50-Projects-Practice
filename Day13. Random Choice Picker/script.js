const choice_input = document.querySelector('.choice-input')
const choice_output = document.querySelector('.tag-container')

choice_input.focus()

choice_input.addEventListener('keyup', (e) => {



    let input = choice_input.value.split(',').filter(item => item.trim())
    choice_output.innerHTML = ''
    input.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag

        choice_output.appendChild(tagEl)
    });

    if (e.key == "Enter") {
        choice_input.value = ''
        randomSelect()
    }
})
const randomSelect = () => {
    const times = 30;
    const interval = setInterval(() => {
        const randTag = pickRandomTag()
        highlightTag(randTag)

        setTimeout(() => {
            unHighlightTag(randTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        highlightTag(pickRandomTag())
    }, 100 * times)

}
const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
    tag.classList.add('highlighted')
}

const unHighlightTag = (tag) => {
    tag.classList.remove('highlighted')
}
