const add = document.querySelector('.add')

const notes = JSON.parse(localStorage.getItem('notes'))
if(notes!= null )
    notes.forEach(note=> addNewNote(note))


add.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
      <div class="tools">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
      </div>

      <div class="main ${text ? '' : "hidden"} "></div>
      <textarea class=${text ? "hidden" : ''}></textarea>
    `

    const clear = noteEl.querySelector('.delete')
    const edit = noteEl.querySelector('.edit')
    const textarea = noteEl.querySelector('textarea')
    const main = noteEl.querySelector('.main')

    textarea.value = text
    main.innerHTML = marked(text)



    clear.addEventListener('click', () => {
        noteEl.remove()
        updateLocalStorage()
    })

    edit.addEventListener('click', () => {
        console.log(textarea.disabled)
        textarea.classList.toggle('hidden')
        main.classList.toggle('hidden')
    })

    textarea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)
        updateLocalStorage()

    })
    document.body.appendChild(noteEl)
}

function updateLocalStorage(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note=>notes.push(note.value))
    localStorage.setItem('notes',JSON.stringify(notes))

}


