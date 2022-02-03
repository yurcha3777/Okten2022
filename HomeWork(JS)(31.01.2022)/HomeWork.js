// // 1)Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// // 2)Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hey = 'hello'
// console.log(hey);
// alert(hey);
// document.write(hey);
//
// let okay = 'owu'
// console.log(okay);
// alert(okay);
// document.write(okay);
//
// let site = 'com'
// console.log(site);
// alert(site);
// document.write(site);
//
// let country = 'ua'
// console.log(country);
// alert(country);
// document.write(country);
//
// let number1 = 1
// console.log(number1);
// alert(number1);
// document.write(number1);
//
// let number10 = 10
// console.log(number10);
// alert(number10);
// document.write(number10);
//
// let numbers999 = 999
// console.log(numbers999);
// alert(numbers999);
// document.write(numbers999);
//
// let numbers123 = 123
// console.log(numbers123);
// alert(numbers123);
// document.write(numbers123);
//
// let number3 = 3.14
// console.log(number3);
// alert(number3);
// document.write(number3);
//
// let number2 = 2.7
// console.log(number2);
// alert(number2);
// document.write(number2);
//
// let number16 = 16;
// console.log(number16);
// alert(number16);
// document.write(number16);
//
// let truthT = true
// console.log(truthT);
// alert(truthT);
// document.write(truthT);
//
// let truthF = false
// console.log(truthF);
// alert(truthF);
// document.write(truthF);
//
// // 3)  Переприсвоїти кожній змінній з завдання значення на довільне.
// // 4)   Вивести кожну змінну за допомогою: console.log , alert, document.write

// hey = 'hey';
// okay = 'okay';
// site = 'site';
// country = 'country';
// number1 = 'number1';
// number10 = 'number10';
// numbers999 = 'numbers999';
// numbers123 = 'numbers123';
// number3 = 'number3';
// number2 = 'number2';
// number16 = 'number16';
// truthT = 'truthT';
// truthF = 'truthF';
//
// console.log(hey, okay, country, number1, number10, number3, number2, number16, truthT, truthF);
// alert(hey, okay, country, number1, number10, number3, number2, number16, truthT, truthF);
// document.write(hey, okay, country, number1, number10, number3, number2, number16, truthT, truthF);

// 5) Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = "Yuriy";
// let middleName = 'Volodymyrovych';
// let lastName = 'Ivantsiv';
// let person = firstName +' '+ middleName +' '+ lastName;
// let res = `${firstName}   ${middleName} ${lastName}`;
// console.log(person);
// console.log(res);

// 6) За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// 7) Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('вітаю ім*я');
// let middleName = prompt('по-батькові');
// let age = prompt('вік');
// let uat = `${name} ${middleName} ${age}`;
// console.log(uat);

// 8)  За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// 9)  let a = 100; let b = '100'; let c = true;

// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true;
// console.log(typeof c);

// 10) Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// 11) В однакових виразах не використовувати однакові оператори!!!
//  5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

// let result = 5 < 6;
// console.log(result);
//
// let result1 = 5 > 6;
// console.log(result1);
//
// let result2 = 5 >= 6;
// console.log(result2);
//
// let result3 = 5 === 6;
// console.log(result3);
//
// let result4 = 10 <= 10;
// console.log(result4);
//
// let result5 = 10 === 10;
// console.log(result5);
//
// let result6 = 10 < 10;
// console.log(result6);
//
// let result7 = 10 > 10;
// console.log(result7);
//
// let result8 = 10 !== 10;
// console.log(result8);
//
// let result9 = 123 === '123'
// console.log(result9)
//
// let result10 = 123 == '123'
// console.log(result10)

// 12) Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//
// // br-переносить на строку,а дальше діють обчислення я так зрозумів
// // якшо стрічку додаєш до числа буде стрічка тобто 205
// // якшо від стрічки віднімати то виходь норм число 15
// // якшо стрічку на стрічку множити буде нормальний вираз тобто 20*2=40
// // якшо стрічку ділити на просте число виходить нормальний вираз,тобто 20/2=10
//
// 205
// 15
// 40
// 10


