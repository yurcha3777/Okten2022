// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);

// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let reg1 = 'hello world';
// let registr = reg1.toUpperCase();
// console.log(registr)

// let reg2 = 'lorem ipsum';
// let registr = reg2.toUpperCase();
// console.log(registr);

// let reg3 = 'javascript is cool';
// let registr = reg3.toUpperCase();
// console.log(registr);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let reg1 = 'HELLO WORLD';
// let registr = reg1.toLowerCase();
// console.log(registr);

// let reg2 = 'LOREM IPSUM';
// let registr = reg2.toLowerCase();
// console.log(registr);

// let reg3 = 'JAVASCRIPT IS COOL';
// let registr = reg3.toLowerCase();
// console.log(registr);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let string = str.trim()
// console.log(string)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Кожний мисливець бажає знати';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Кожний', 'мисливець', 'бажає', 'знати']
//
// let str = 'Кожний мисливець бажає знати';
// let arr = str.split(' ');
// console.log(arr)
// document.write(arr)


// let str = 'Кожний мисливець бажає знати';
// function stringToarray(str){
//     return str.trim().split(' ')
// }
// let arr = stringToarray(str)
// console.log(arr)


// let str1 = 'Кожний мисливець не знає';
// let arr1 = stringToarray(str1)
// console.log(arr1)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Кожний мисливець бажає знати';
// document.writeln(delete_characters(str, 7)); // Кожний;

// let str = 'Кожний мисливець бажає знати';
// let arr = str.substr(0,6);
// console.log(arr)
// document.write(arr)

// let str = 'Кожний мисливець бажає знати';
//
// function delete_characters(str, number) {
//     return str.substr(0, number)
// }
// console.log(delete_characters(str, 6))
// document.write(delete_characters(str,6));




// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let arr =str.toUpperCase().replaceAll(' ','-')
// console.log(arr)
// document.write(arr)

// let str = "HTML JavaScript PHP";
// function insert_dash(str){
//     return str.toUpperCase().replaceAll(' ','-')
// }
// console.log(insert_dash(str))
// document.write(insert_dash(str))




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
//  з нижнього регістру у верхній.

// let txt = 'hello world';
// function registr(txt){
//     return txt.replace(txt[0],txt[0].toUpperCase())
// }
// console.log(registr(txt));




//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'яка повертає рядок, у якому кожне слово починається';
// function capitalize(str){
//
// }
// console.log(capitalize(str))
//

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));


