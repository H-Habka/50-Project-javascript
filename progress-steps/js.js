let next = document.getElementById('next')
let prev = document.getElementById('prev')
let progress = document.getElementById('progress')
let circles = document.querySelectorAll('.circle')

let idx = 0

let setActiveCircles = () => {
    circles.forEach((circle, index) => {
        if (index <= idx) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}


let buttonValidation = (idx) => {
    if (idx === 0) 
     prev.setAttribute('disabled', 'disabled')
    if (idx === 3) return next.setAttribute('disabled', 'disabled')


    prev.removeAttribute('disabled')
    next.removeAttribute('disabled')
}

let idxValidation = (idx) => {
    if (idx >= circles.length - 1) return circles.length - 1 
    if (idx <= 0) return 0
    return idx
}

prev.addEventListener('click', e => {
    idx = idxValidation(idx - 1)
    setActiveCircles()
    buttonValidation(idx)
    progress.style.width = (idx / (circles.length - 1)) * 100 + "%"
})


next.addEventListener('click', e => {
    idx = idxValidation(idx + 1)
    setActiveCircles()
    buttonValidation(idx)
    progress.style.width = (idx / (circles.length - 1)) * 100 + "%"
})


buttonValidation(idx)






