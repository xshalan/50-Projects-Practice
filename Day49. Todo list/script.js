const todo_input = document.getElementById('todo_input')
const todo_form = document.querySelector(".todo-form")
const todo_list_ulEl = document.querySelector('.todo_list')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo=>{
        createNewTodo(todo)
    })
}

function createNewTodo(todo) {
    const listEl = document.createElement('li')
    listEl.classList.add('todo_list_item')
    listEl.innerHTML = todo.text
    if (todo && todo.isCompleted) {
        listEl.classList.add('todo_list_item_completed')
    }
    todo_list_ulEl.appendChild(listEl)

    listEl.addEventListener('click', () => {
        listEl.classList.toggle('todo_list_item_completed')
        updateLS()
        
    })

    listEl.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        todo_list_ulEl.removeChild(listEl)
        updateLS()
    })
    updateLS()
}

todo_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let todo_to_enter = {
        text:todo_input.value,
        isCompleted:false
    }
    todo_input.value = ''
    createNewTodo(todo_to_enter)

})

function updateLS(){
    const todoEls = document.querySelectorAll('.todo_list_item') 
    const list = [] 

    todoEls.forEach(item=>{
        list.push({
            text: item.innerText,
            isCompleted: item.classList.contains('todo_list_item_completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(list))
}
