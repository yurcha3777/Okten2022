// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//  которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        const divBoss = document.createElement('div');
        document.body.appendChild(divBoss)
        divBoss.setAttribute('class', 'divBoss');
        for (const user of users) {
            const divOne = document.createElement('div');
            divOne.innerHTML = `<h3>ID: ${user.id}</h3> <h3>Name: ${user.name}</h3>`
            divOne.setAttribute('class', 'divOne');
            divBoss.append(divOne)
            const btn = document.createElement('button');
            btn.setAttribute('class', 'btn')
            divOne.append(btn)
            btn.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user))
            }
            btn.innerHTML = `<a href="user-details.html">details</a>`


        }
    })