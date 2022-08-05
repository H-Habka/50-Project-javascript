joke = document.getElementById('joke')
jokeBtn = document.getElementById('jokeBtn')



const fetchNewJoke = () => {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    }).then(response => {
        response.json().then(response => {
            console.log('res is : ', response)
            joke.innerHTML = response.joke
        }).catch(err => {
            console.log('err is : ', err)
        })

    }).catch(err => {
        console.log(err);
    })
}

jokeBtn.addEventListener('click', fetchNewJoke)

fetchNewJoke()