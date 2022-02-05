// --створити масив з:
//    - з 5 числових значень
//    - з 5 стічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
//    - та вивести його в консоль

// let number = [11, 21, 31, 41, 51];
// let txt = ['text', 'apple', 'red', 'pink', 'white'];
// let mix = ['apple', 'red', true, 21, false];
// console.log(number);
// console.log(txt);
// console.log(mix);


//  Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let text = [];
// text[0] = 'one';
// text[1] = 2002;
// text[2] = 'three';
// text[3] = true;
// console.log(text)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem</div>`)
// }

// let menu = ['about','contacts','navigation','menu1'];
// for (let i = 0; i < menu.length; i++) {
//     document.write(`<div> ${menu[i]}</div>`)
// }

// let menu = ['about','contacts','navigation','menu1'];
// let i = 0;
// while ( i < menu.length) {
//     i++;
//     document.write(`<h1>Lorem uyftd  adads</h1>`)
// }


// let menu = ['about', 'contacts', 'navigation', 'menu1','red','blue','pink','three','ten','big',1,2,3,4,5,6,7,8,9,'end'];
// let i = 0;
// while (i < menu.length) {
//     document.write(`<h1>Open ${menu [i]}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let number = [10,11,12,13,14,15,16,17,18,19]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// let number = ['about', 'contacts', 'navigation', 'menu1','red','blue','pink','three','ten','big']
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// let number = [200, 'contacts', 'navigation', true, [], {}, 'red', 1003, 'pink', 'three', false, 'big']
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// let boolean = [200, 'contacts', 'navigation', true, 'red', 1003, 'pink', 'three', false, 'big'];
// for ( i = 0; i < boolean.length; i++) {
//     if (typeof boolean[i] === 'boolean') {
//         console.log(boolean[i]);
//     }
// }
//

// let number = [200, 'contacts', 'navigation', true, 'red', 1003, 'pink', 'three', false, 'big'];
// for ( i = 0; i < number.length; i++) {
//     if (typeof number[i] === 'number') {
//         console.log(number[i]);
//     }
// }

// let string = [200, 'contacts', 'navigation', true, 'red', 1003, 'pink', 'three', false, 'big'];
// for ( i = 0; i < string.length; i++) {
//     if (typeof string[i] === 'string'){
//         console.log(string[i])
//     }
//
// }


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let element = []
// element[0] = 200;
// element[1] = 'contacts';
// element[2] = 'navigation';
// element[3] = true;
// element[4] = 'red';
// element[5] = 1003;
// element[6] = 'pink';
// element[7] = 'three';
// element[8] = false;
// element[9] = 'big';
// for ( i = 0; i < element.length; i++) {
//     console.log(element[i]);
//}

// for (let i = 0; i < 10; i++) {
//     console.log([i]);
//     document.write([i]);
// }


// for (let i = 0; i < 100; i++) {
//     console.log([i]);
//     document.write([i]);
// }

// for (let i = 0; i <= 100; i += 2) {
//     console.log([i]);
//     document.write([i]);
// }

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 === 0 ){
//     console.log([i]);
//     document.write([i]);
//   }
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log([i]);
//     document.write([i]);
//     }
// }
