// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так
//     , чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.getElementById('text')
// let lesson1 = document.getElementById('lesson1')
// lesson1.onclick = function () {
//     text.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

// let lesson2 = document.getElementById('lesson2').onclick = function () {
//     let age = document.getElementById('age').value;
//     if (!age){
//         alert('Введіть вік свій!!!')
//     }else if (+age < 18){
//         alert('Ваш вік недостатній')
//     }else {
//         alert('Вітаю ви пройшли перевірку!')
//     }
// }


//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
//   та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.getElementById('btn').onclick = function () {
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const inputOne = document.createElement('input');
// const inputTwo = document.createElement('input');
// const inputThree = document.createElement('input');
// const button = document.createElement('button')
// button.innerText = 'click'
//
// document.body.append(inputOne,inputTwo,inputThree,button)
//
// button.addEventListener('click', function () {
//     const tr = inputOne.value;
//     const td = inputTwo.value;
//     const textinput = inputThree.value;
//     function creatorTable(td,tr,text) {
//         const table = document.createElement('table')
//         document.body.appendChild(table)
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr')
//             table.appendChild(tr)
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td')
//                 td.innerText = `${text}`
//                 td.style.border = '1px solid black'
//                 tr.appendChild(td)
//             }
//         }
//     }
//     creatorTable(tr,td,textinput)
// })

