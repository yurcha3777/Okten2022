// На странице user-details.html:
// 4) Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5) Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6) Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//

let user = JSON.parse(localStorage.getItem('user'));

const divBossOne = document.createElement('div');
divBossOne.setAttribute('class', 'divBossOne')
const divBossOneInfo = document.createElement('div')
divBossOneInfo.setAttribute('class', 'divBossOneInfo')
divBossOneInfo.innerHTML = `
<h1>ID: ${user.id}</h1>
<h2>Name: ${user.name}</h2>
<h3>Email: ${user.email}</h3>
<ul>Adrees:
<li>Street: ${user.address.street};</li>
<li>Suite: ${user.address.suite};</li>
<li>City: ${user.address.city};</li>
</ul>
<h4>Phone: ${user.phone}</h4>
<h5>Website: ${user.website}</h5>
<ul>Company:
<li>Name: ${user.company.name};</li>
<li>CatchPhrase: ${user.company.catchPhrase};</li>
<li>Bs: ${user.company.bs};</li>
</ul>
`
const btn2 = document.createElement('button');
btn2.setAttribute('class', 'btn2')
btn2.innerHTML = `<a href="post-details.html">post-details</a>`
divBossOneInfo.append(btn2)
document.body.append(divBossOne)
divBossOne.append(divBossOneInfo)

