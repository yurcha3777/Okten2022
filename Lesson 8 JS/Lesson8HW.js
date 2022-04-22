// - Напишіть код,  котрий :
// 1) -- отримує текст з параграфа з id "content"
// 2)-- отримує текст з блоку з id "rules"
// 3)-- замініть текст параграфа з id 'content' на будь-який інший
// 4)-- замініть текст параграфа з id 'rules' на будь-який інший
// 5)-- змініть кожному елементу колір фону на червоний
// 6)-- змініть кожному елементу колір тексту на синій
// 7)-- отримати весь список класів елемента з id=rules і вивести їх в console.log
// 8)-- поміняти колір тексту у всіх елементів fc_rules на червоний

// // 1.
// let byContent = document.getElementById('content');
// console.log(byContent);
// // 2.
// let byRules = document.getElementById('rules');
// console.log(byContent);
// // 3.
// byContent.innerHTML = 'Слава Україні'
// // 4.
// byRules.innerHTML = 'Героям Слава'
// // 5.
// let colorFon = document.body.children
// for (const colorFonElement of colorFon) {
//     colorFonElement.style.backgroundColor = 'blue'
// }
// // 6.
// let colorTxt = document.body.children
// for (const colorTxtElement of colorTxt) {
//     colorTxtElement.style.color = 'yellow'
// }
// // 7.
// let listClass = document.getElementById('rules');
// console.log(listClass.classList);
// // 8.
// let colorCLass = document.getElementsByClassName('fc_rules');
// for (const colorCLass1 of colorCLass) {
//     colorCLass1.style.color = 'red'
// }
