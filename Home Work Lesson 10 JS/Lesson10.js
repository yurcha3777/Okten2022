// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//   чтобы при клике на кнопку исчезал элемент с id="text".
let idText = document.getElementById('text')
let idLesson1 = document.getElementById('lesson1')
idLesson1.onclick = function () {
    idText.style.display = 'none'
}
// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let idLesson2 = document.getElementById('lesson2')
idLesson2.onclick = function () {
    idLesson2.style.display = 'none'
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
let lesson3 = document.getElementById('Lesson3').onclick = function () {
    let age = document.getElementById('age').value;
    if (!age) {
        alert('Введіть вік свій!!!!!!')
    } else if (+age < 18) {
        alert('Ваш вік є недостатній!')
    } else {
        alert('Вітаю!!!')
    }

}

// - Создайте меню, которое раскрывается/сворачивается при клике
let getButton = document.querySelector('.menu');
document.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest('.menu_button')) {
        getButton.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        getButton.classList.remove('_active');
    }
}


// - Создать список комментариев , пример объекта коментария -
//   {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let people = [
    {name: 'Oleg', body: 'Слава Украіні'},
    {name: 'Olya', body: 'Смерть ворогам'},
    {name: 'Maria', body: 'Украіна понад усе'},
    {name: 'Andriy', body: 'Україна'},
];
let divBoss = document.createElement('div');
for (const person of people) {
    let divpeople = document.createElement('div');
    let h2People = document.createElement('h2')
    let pPeople = document.createElement('p');
    let getbutton = document.createElement('button')

    h2People.innerText = person.name
    pPeople.innerHTML = person.body
    getbutton.innerHTML = 'CLOSED'
    getbutton.onclick = () => {
        pPeople.classList.add('btn')
    }
    divpeople.append(getbutton,pPeople,h2People)
    divBoss.append(divpeople)
}
document.body.appendChild(divBoss)

// let divFather = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = item.name;
//     p.innerHTML = item.body;
//     btn.innerHTML = 'Закрий мене'
//
//     btn.onclick = () => {
//         p.classList.add('pHidden');
//         // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
//     }
//     div.append(h3, p, btn);
//     divFather.append(div, hr);
// }
// document.body.appendChild(divFather)
