// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron  Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron--------Whisley'
// let n3 = 'Hermione___Granger'
// function fun(fanatic){
//     return fanatic.replaceAll('.',' ')
//     .replaceAll('-',' ')
//         .replaceAll('_',' ')
// }
// console.log(fun(n1),fun(n2),fun(n3))


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// function getRandomNumbersArray(length, num) {
//     let arrayOfNumbers = [];
//     for (let i = 0; i < length; i++) {
//         arrayOfNumbers.push(Math.floor(Math.random() * num))
//     }
//     return arrayOfNumbers;
// }
//
// let result = getRandomNumbersArray(1, 100)
// console.log(result)
//

//   - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort
//
// result.sort((a, b) => a - b);
// console.log(result)
// result.sort((a, b) => b - a);
// console.log(result)



// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// console.log(coursesAndDurationArray.filter(cours => cours.monthDuration > 5))
//
