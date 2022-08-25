let about = document.querySelector('.about')
let btn = document.querySelectorAll('.tab-btn')
let content = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if (id) {
        btn.forEach(function (btn) {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        content.forEach(function (content) {
            content.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')

    }
})