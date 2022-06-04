// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(e => {
//         return e.json()
//     })
//     .then(post => {
//         const divBoss = document.createElement('div')
//         divBoss.setAttribute('class', 'divBoss')
//         for (const postElement of post) {
//             const div1 = document.createElement('div')
//             div1.classList.add('divOne')
//             div1.innerHTML = `
//             <h2>ID:${postElement.id}</h2>
//             <h5>Title:${postElement.title}</h5>
//             <p>Body:${postElement.body}</p>
//             `
//             divBoss.append(div1)
//             document.body.append(divBoss)
//         }
//     })

// додаткове
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(e => {
        return e.json()
    })
    .then(post => {
        const divBoss = document.createElement('div')
        divBoss.setAttribute('class', 'divBoss')
        for (const postElement of post) {
            const div1 = document.createElement('div')
            div1.classList.add('divOne')
            const {userId, id, title, body} = postElement
            div1.innerHTML = `
            <h2>User id:${userId}</h2>
            <h2>ID:${id}</h2>
            <h5>Title:${title}</h5>
            <p>Body:${body}</p>
            `
            divBoss.append(div1)
            document.body.append(divBoss)
        const btn = document.createElement('button')
            btn.innerText = '+'
            div1.append(btn)
            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/commnets`)
                    .then(comments => comments.json())
                    .then(comments => {
                        const divbtn = document.createElement('div')
                        div1.append(divbtn)
                        for (const comment of comments) {
                            const divcomment = document.createElement('div')
                            divcomment.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name + ' '
                            + comment.email + ' ' + comment.body;
                            divbtn.append(divcomment)

                        }
                    })
            }
        }

    })




// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//    .then(e => {
//        return e.json()
//    })
//    .then(commnets => {
//        const divBoss = document.createElement('div')
//        divBoss.classList.add('boss')
//        for (const comment of commnets) {
//            const div1 = document.createElement('div')
//            div1.classList.add('text')
//            div1.innerHTML = `
//            <h2>ID:${comment.id}</h2>
//            <h3>Name:${comment.name}</h3>
//            <h5>Email:${comment.email}</h5>
//            <p>Body:${comment.body}</p>
//            `
//            divBoss.append(div1)
//            document.body.append(divBoss)
//        }
//    })


