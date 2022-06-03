const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class="card">
            ${event.key===' '?'Space':event.key}
            <small>event.key</small>
        </div>

        <div class="card">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="card">
            ${event.code}
            <small>event.code</small>
        </div>

    `
})
