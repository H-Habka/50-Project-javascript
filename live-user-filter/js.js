const ul = document.getElementById('result')
const filter = document.getElementById('filter')
let allUsers = []


let getUsersData = async () => {
    let response = await fetch('https://randomuser.me/api?results=50')
    let {results} = await response.json()
    ul.innerHTML = ''
    results.forEach(user => {
        let {first , last} = user.name
        let li = `
        <li>
            <img src="${user.picture.large}" alt="${first}">
            <div class="user-info">
                <h4>${first} ${last}</h4>
                <p>${user.location.city},  ${user.location.country}</p>
            </div>
        </li>
    `
        ul.insertAdjacentHTML('beforeend',li )

        allUsers.push([li,`${first} ${last} ${user.location.city} ${user.location.country}`])
    })
}
['asdasdasdasdasd', 'namwasdasdasd']
let createFilterdArray = (currentArray, filterStr) =>{
    return currentArray.filter(item =>{
        return item[1].toLowerCase().includes(filterStr.toLowerCase())
    })
}

filter.addEventListener('input', e =>{
    let filterdArray = createFilterdArray(allUsers,e.target.value)
    ul.innerHTML = ''
    filterdArray.forEach(li =>{
        ul.insertAdjacentHTML('beforeend',li[0] )

    })
})


getUsersData()
