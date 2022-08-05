const textEl = document.getElementById('text')
const text = 'wael and boshraa are awesome'
let idx = 0
let delay = 900

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 0
    }
    
    setTimeout(writeText, delay)
}


let doSomeThing = (el) =>{
    writeText()
    document.getElementById('start').style.display = 'none'
    test(el)
}

let test = (el) =>{
    let input = el.value
    delay = (11 - input) * 100
}


