//  1.- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function number1(a, b) {
//     let num = a * b;
//     return num;
// }
// let number = number1(8, 10) ;
// console.log(number);

// 2.- створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function rr(r){
//     let rr = r ** 2;
//     let prC = 3.14 * rr;
//     return prC;
// }
// console.log(rr(5))


// 3. - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(h,r){
//     let pi = 2 * 3.14;
//     let p = pi*r*h;
//     return p;
// }
// console.log(cylinder(7,5))


// 4. - створити функцію яка приймає масив та виводить кожен його елемент

// let m = [1, 22, 'red', 'apple', 'orange', 333];
//
// function masiv(m) {
//     for (i = 0; i < m.length; i++) {
//         console.log(m[i])
//     }
// }
//
// masiv(m)

//
// 5.- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(txt){
//     document.write(`<p>${txt}</p>`)
// }
// text("- створити функцію яка створює параграф з текстом. Текст задати через аргумент\n")

//6. - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function text(txt){
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// text('Okten')
// text('Okten')
// text('Okten')


// 7.- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text(txt, number) {
//     document.write(`<ul>`)
//     for (i = 0; i < number; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// text('txt', 3)


// 8.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let fun = [12, 33, "tree", true]
//
// function number(fun) {
//     document.write(`<ol>`)
//     for (i = 0; i < fun.length; i++) {
//         document.write(`<li>${fun}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// number(fun)


// 9. - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let people = [{id: 1, name: 'Leo', age: 22}, {id: 2, name: 'Leto', age: 25}, {id: 3, name: 'Rio', age: 21}]
// function objectPeople(arr){
//
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//
// }
// }
//
// (objectPeople(people));
