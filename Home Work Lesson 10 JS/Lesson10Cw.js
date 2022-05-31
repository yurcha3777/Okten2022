// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
//   та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


let div1 = document.createElement('div');
div1.innerText = 'Block_1'
div1.style.margin = '20px';
document.body.appendChild(div1)

let div2 = document.createElement('div');
div2.innerText = 'Block_2'
div2.style.margin = '20px'
document.body.appendChild(div2)

let form1 = document.createElement('form');
form1.setAttribute('name','form1')
div1.append(form1)

let form2 = document.createElement('form');
form2.setAttribute('name','form2')
div2.append(form2)

let input1 = document.createElement('input')
input1.setAttribute('name','input1')

let input2 = document.createElement('input')
input2.setAttribute('name','input2')

let input3 = document.createElement('input')
input3.setAttribute('name','input3')

let input4 = document.createElement('input')
input4.setAttribute('name','input4')

let button = document.createElement('button');
button.innerText = 'CLICK ME PLEASE'
document.body.appendChild(button)

form1.append(input1,input2)
form2.append(input3,input4)

button.addEventListener('click', function () {
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);
})


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// let button = document.createElement('button')
//  button.innerText = 'Введіть дані для таблиці,будь ласка!'
//
// document.body.append(input1,input2,input3,button)
//
// button.addEventListener('click', function () {
//     let tr = input1.value
//     let td = input2.value
//     let text = input3.value
//
// function createTable(tr,td,etext) {
//     let table = document.createElement('table')
//     let divTable = document.createElement('div')
//     table.style.border = ' 1px solid black'
//     divTable.appendChild(table)
//     document.body.appendChild(divTable)
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr')
//         tr.style.border = '1px solid grey';
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td')
//             td.style.border = '1px solid grey'
//             td.innerText = `${etext}`;
//             table.append(tr)
//             tr.append(td)
//         }
//     }
// }
// createTable(5,10,'Vloada ')
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arry = ['fuck', 'ass', 'cock', 'bich'];
// let input1 = document.createElement('input');
// let button = document.createElement('button')
// button.innerText = 'Перевірка тексту'
// document.body.append(input1, button)
// button.addEventListener('click', function () {
//     let inputValue = input1.value
//     for (const arr of arry) {
//         if (arr === inputValue){
//             alert('STOP PLEASE')
//             input1.value = ''
//             return
//         }
//             }
//     if (inputValue){
//         alert('GOOD')
//         input1.value = ''
//     }
// })


//
// let arry = ['fuck', 'ass', 'cock', 'bich'];
// let input1 = document.createElement('input');
// let button = document.createElement('button')
// button.innerText = 'Перевірка тексту'
// document.body.append(input1, button)
// input1.addEventListener('input',(e) => {
//  let eInput = e.target;
//  let dataImput = eInput.value
//     let lowerCase = dataImput.toLowerCase();
//  if (lowerCase.includes('fuck')) {
//      alert('NO NO NO NO')
//  }
// })



// Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку




// let form = document.createElement('form')
// document.body.appendChild(form)
//
// let input = document.createElement('input')
// input.type = 'text'
// input.name = 'login'
// form.appendChild(input)
//
// let button = document.createElement('button')
// button.innerText = 'Перевірити логін'
// form.appendChild(button)
//
// input.addEventListener('input', (e) => {
//     if (e.target.value.toLowerCase().includes('fuck')) {
//         alert('NO NO NO NO')
//     } if (e.target.value.toLowerCase().includes('ass')) {
//         alert('NO NO NO NO')
//     } if (e.target.value.toLowerCase().includes('cock')) {
//         alert('NO NO NO NO')
//     }
// })
