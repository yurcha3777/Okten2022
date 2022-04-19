// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//   рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
//     в поточний об'єкт car

// function Car (model, producer, year, maxspeed, volume) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} km на годину`);
//         };
//         this.newMaxSpeed = function (newSpeed) {
//             this.maxspeed = this.maxspeed
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver
//         };
//     }
//
//      let addCar = new Car('BMW', 'Deichland', 2010, 300, 2.5);
// console.log(addCar);
//
// addCar1 = new Car('Audi', 'Deichland', 2020, 290, 2.2)
// console.log(addCar1);
// console.log(addCar1.drive());
//

////                   2.
// class Car {
//     constructor (model, producer, year, maxspeed, volume){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//   drive(){
//       console.log(`Їдемо хі швидкістю ${this.maxspeed}`);
//   }
//   newMaxspeed(newSpeed){
//         this.maxspeed = this.maxspeed + newSpeed;
//   }
// changeYear(newValue){
//         this.year = newValue
// }
// addDrive(driver){
//         thhis.driver = driver
// }
// }
// let car = new Car('audi', 'Ukraine', 2010, 200, 2.3);
// console.log(car);
//
//


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//
// class Girl {
//     constructor(name, year, sizeleg) {
//         this._name = name;
//         this._year = year;
//         this._sizeleg = sizeleg;
//     }
//
// }
// let newGirl = [
//     new Girl('Olya', 22, 38),
//     new Girl('Olena', 22, 39),
//     new Girl('Oksana', 22, 38),
//     new Girl('Ira', 22, 39),
//     new Girl('Olena', 33, 37),
//     new Girl('Maria', 21, 36),
//     new Girl('Nastya', 20, 36),
//     new Girl('Viktoria', 28, 39),
//     new Girl('Marta', 25, 38),
//     new Girl('Galya', 22, 36),
// ]
// console.log(newGirl);
//
// class Prince {
//     constructor(name, year, shoe) {
//
//         this._name = name;
//         this._year = year;
//         this._shoe = shoe;
//     }
// }
//
// let prince = new Prince('Oleg', 33, 37);
//
// let newPara = (newGirl, prince) => {
//     for (const girlElement of newGirl) {
//         if (girlElement._sizeleg === prince._shoe) {
//             return `Твоя дівчина:${girlElement._name}`
//         }
//     }
// }
// console.log(newPara(newGirl, prince));
