// Все робити за допомоги js.
// - створити блок,

// let div1 = document.createElement('div')
//     - додати йому класи wrap, collapse, alpha, beta
// div1.classList.add('wrap')
// div1.classList.add('collapse')
// div1.classList.add('alpha')
// div1.classList.add('beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div1.style.cssText = `
//     backraynd-color: red;
//     color: blue;
//     font-size: 35px;
// `;
// - додати цей блок в body.
// document.body.appendChild(div1);
// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div1.cloneNode(true));
// console.log(div1);
// div1.innerText = 'Loren items ORORORORO'
//


// Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

//
// let arr = ['Main','Products','About us','Contacts'];
// for (const string of arr) {
//     let liObj = document.createElement('li')
//    let newProduct = document.body.appendChild(liObj)
//     let newProducts = document.getElementsByClassName('menu')[0]
//     newProducts.appendChild(newProduct)
//     liObj.innerText= `${string}`
// }




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let productDiv = document.createElement('div')
//     document.body.appendChild(productDiv)
//     let h2 = document.createElement('h2')
//     productDiv.innerText = `${coursesAndDurationArrayElement.title}
//     ${coursesAndDurationArrayElement.monthDuration}`
//     productDiv.appendChild(h2)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesArrayElement of coursesArray) {
//     let newDiv = document.createElement('div')
//     document.body.appendChild(newDiv)
//     newDiv.classList = 'item'
//     let newH2 = document.createElement('h2')
//     newDiv.appendChild(newH2)
//     newH2.classList = 'reading'
//     newH2.innerText = `${coursesArrayElement.title}`
//     let newP = document.createElement('p')
//     newP.classList = 'description'
//     newP.innerText = `${coursesArrayElement.monthDuration}`
//     newH2.appendChild(newP)
//
// }
//

