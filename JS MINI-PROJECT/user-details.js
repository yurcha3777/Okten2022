// На странице user-details.html:
// 4) Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5) Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6) Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//

let user = JSON.parse(localStorage.getItem('user'))
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(posts => posts.json())
    .then(posts => {
        const divBossOne = document.createElement('div');
        divBossOne.setAttribute('class', 'divBossOne')
        document.body.append(divBossOne)
        for (const post of posts) {
            const divTwo = document.createElement('div')
            divBossOne.append(divTwo)
            divTwo.innerHTML = `<h2>User ID: ${post.userId}</h2> <h3>ID: ${post.id}</h3> <h4>Title: ${post.title}</h4> <p>Body: ${post.body}</p>`
            divTwo.setAttribute('class','divTwo')

        }
    })
