// - Створити функцію конструктор яка дозволяє створюватиоб'єкти car, з властивостями модель' +
// ', виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxspeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`Ідемо зі швидкістю ${this.maxspeed} на км`);
//     };
//     this.newMaxSpeed= function (newSpeed){
//         this.maxspeed = this.maxspeed + newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year =  newValue
//     };
//     this.addDrive = function (driver){
//         this.drive = driver
//     };
// }
//
// let newcar = new Car('Bmw','Deachland',2001,2010,2.5);
// console.log(newcar);
// newcar.drive();
// newcar.newMaxSpeed('20');
// newcar.changeYear('2020');
// newcar.addDrive('Oleg')
// console.log(newcar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxspeed, engine) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Ідемо зі швидкістю ${this.maxspeed} на км`);
//     };
//
//     info() {
//         for (const key in this) {
//             console.log(`${key}-${this[key]}`);
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed - newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver){
//         this.drive = driver;
//     }
// }
// let addDrive = new Car('Bmw','Ukraine','2001',200,2.5);
// console.log(addDrive);
// addDrive.drive()
// addDrive.info()
// addDrive.increaseMaxSpeed(55)
// addDrive.changeYear(2008 )
// addDrive.info()
// addDrive.addDriver('Diego')
// console.log(addDrive);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelyshka {
    constructor(name, year, legsCm) {

        this.name = name;
        this.year = year;
        this.legsCm = legsCm;
    }
}


let arryPopelyshka = [
    new Popelyshka('Olya', 22, 38),
    new Popelyshka('Olena', 22, 39),
    new Popelyshka('Oksana', 22, 38),
    new Popelyshka('Ira', 22, 39),
    new Popelyshka('Olena', 33, 37),
    new Popelyshka('Maria', 21, 36),
    new Popelyshka('Nastya', 20, 36),
    new Popelyshka('Viktoria', 28, 39),
    new Popelyshka('Marta', 25, 38),
    new Popelyshka('Galya', 22, 36),
]
console.log(arryPopelyshka);

class Prince {
    constructor(name, year, legs) {
        this.name = name;
        this.year = year;
        this.legs = legs;
    }
}

let prince = new Prince('Maria', 21, 36)

let newPara = (arryPopelyshka, prince) => {
    for (const arryPopelyshkaElement of arryPopelyshka) {
        if (arryPopelyshkaElement.legsCm === prince.legs) {
            return `Твоя попелюшка ${arryPopelyshkaElement.name}`
        }
    }
}
console.log(newPara(arryPopelyshka, prince));