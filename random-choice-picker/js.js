let textarea = document.getElementById('textarea')
let tags = document.getElementById('tags')


textarea.addEventListener('keyup', e =>{

  
    tags.innerHTML = ''
    let choices = e.target.value.split(',')


    choices = choices.map(item => item.trim()).filter(item => item)
    choices.forEach(choice => {
        tags.insertAdjacentHTML('beforeend', `<span class='tag'>${choice}</span>`)
    })


    if(e.key == 'Enter'){
        e.target.value = ''
        let times = 10

        let spans = tags.querySelectorAll('span')
        let randChoice
        let interval  = setInterval(() =>{
            randChoice = Math.floor(Math.random() * spans.length)
            
            highlightTag(spans[randChoice])
            
            setTimeout(() =>{
                unHighlightTag(spans[randChoice])
            },300)
            
        },500)
        
        setTimeout(() =>{
            clearInterval(interval)


            setTimeout(() => {
                highlightTag(spans[Math.floor(Math.random() * spans.length)])
            }, 500)


        }, 500 * (times - 1))

    }

})


function highlightTag(tag) {
    console.log(tag);
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
    console.log(tag);
}

