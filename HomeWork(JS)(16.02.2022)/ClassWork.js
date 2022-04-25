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
//             this.maxspeed = newSpeed;
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
// addCar.changeYear('2220');
// console.log(addCar);
// addCar.newMaxSpeed(211);
// console.log(addCar);
// addCar.addDriver('Oleg');
// console.log(addCar);


////                   2.
// class Car {
//     constructor(model, producer, year, maxspeed, volume) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} km на годину`);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed = newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.drive = driver;
//     }
// }
// let newModel = new Car('Audi','Deichland',2010,200,2.5);
// console.log(newModel);
// newModel.drive()
// newModel.changeYear(2001);
// newModel.increaseMaxSpeed(250);
// newModel.addDriver('Ivan');
// console.log(newModel);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Popelyshka{
//     constructor(name, year, legCm) {
//         this.name = name;
//         this.year = year;
//         this.legCm = legCm;
//     }
// }
//
// console.log(Popelyshka);
//
// let newGirl = [
//     new Popelyshka('Olya', 22, 38),
//     new Popelyshka('Olena', 22, 39),
//     new Popelyshka('Oksana', 22, 38),
//     new Popelyshka('Ira', 22, 39),
//     new Popelyshka('Olena', 33, 37),
//     new Popelyshka('Maria', 21, 36),
//     new Popelyshka('Nastya', 20, 36),
//     new Popelyshka('Viktoria', 28, 39),
//     new Popelyshka('Marta', 25, 38),
//     new Popelyshka('Galya', 22, 36),
// ]
// console.log(newGirl);
//
//
// class Prince {
//     constructor(name,year,legCm) {
//         this.name = name;
//         this.year = year;
//         this.legCm = legCm;
//     }
// }
//
// let newPrince = new Prince('Maria',21,36);
// console.log(newPrince);
//
//
// let newPara = (newGirl,newPrince)=>{
//     for (const newGirlElement of newGirl) {
//         if (newGirlElement.legCm === newPrince.legCm){
//             return`твоя дівчина ${newGirlElement.name}`
//         }
//     }
// }
// console.log(newPara(newGirl, newPrince));
