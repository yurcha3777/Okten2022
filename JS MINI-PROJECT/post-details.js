
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https:
// //jsonplaceholder.typicode.com/posts/POST_ID/comments)

let user = JSON.parse(localStorage.getItem('user'));
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(posts => posts.json())
    .then(posts => {
        const divBossThree = document.createElement('div');
        divBossThree.setAttribute('class', 'divBossThree')
        document.body.append(divBossThree)
        for (const post of posts) {
            const divThree = document.createElement('div')
            divBossThree.append(divThree)
            divThree.innerHTML = `<h2>User ID: ${post.userId}</h2> <h3>ID: ${post.id}</h3> <h4>Title: ${post.title}</h4> <p>Body: ${post.body}</p>`
            divThree.setAttribute('class','divThree')

        }
    })