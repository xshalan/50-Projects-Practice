
const add = document.querySelector('.add')



add.addEventListener('click', () => addNewNote())

function addNewNote() {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
      <div class="tools">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
      </div>

      <div class="hidden"></div>
      <textarea></textarea>
    `
    document.body.appendChild(noteEl)

    const clear = noteEl.querySelector('.delete')
    const edit = noteEl.querySelector('.edit')
    const textarea = noteEl.querySelector('textarea')

    clear.addEventListener('click', () => {
        noteEl.remove()
    })

    edit.addEventListener('click', () => {
        if(textarea.disabled){
            textarea.disabled = false
        }else{
            textarea.disabled = true
        }
    })

    
}


