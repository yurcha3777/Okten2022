// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone - phone;
// }
//
// console.log(User);


// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let Arr = [
//     new User(4, 'Ivan', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(3, 'Volodia', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(1, 'Andrey', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(5, 'Oleg', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(9, 'Yuriy', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(6, 'Igor', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(10, 'Oleksiy', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(8, 'Nazar', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(2, 'Petro', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
//     new User(7, 'Roman', 'Popariv', 'poparivivan12@gmail.com', 380678256444),
// ];
// console.log(Arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парнuими id (filter)
// let ser = Arr.filter((user) => {
//     return user.id % 2 === 0;
// })
// console.log(ser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let userSort = Arr.sort((a,b)=>{
//     return a.id - b.id;
// })
// console.log(userSort);
//

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


// class Client {
//     constructor(id, name, surname , email, phone, order) {
//
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// console.log(Client);

// створити пустий масив, наповнити його 10 об'єктами Client

// let areey = [
//     new Client(1, 'Oleg', 'Ratan', 'ratun@gmail.com', '380939114121', ['iPhoneXR', 'iPhone12', 'iPhoone']),
// new Client(3, 'Ivan', 'Itaryk', 'itaryk@gmail.com', '380938914131', ['iPhone7','iPhone6','iPhone12Pro','iPhone11Pro']),
// new Client(5, 'Andry', 'Kira', 'kira@gmail.com', '380932214147', ['iPhoneX','AirPods']),
// new Client(4, 'Yuriy', 'Maranov', 'maranov@gmail.com', '380931112251', ['iPhone12','iPad7']),
// new Client(2, 'Petro', 'Ivaskiv', 'ivaskiv@gmail.com', '380936718851', ['iPhone11Pro','iPhone6Plus','iPhoneXR','iPhoneX','iPhone12']),
// new Client(6, 'Igor', 'Harok', 'harok@gmail.com', '380912214141', ['iPhoneXS','iPhone5']),
// ]
// console.log(areey);


// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// //    товарів в полі order по зростанню. (sort)
//
// let sortClient = areey.sort((b,a)=>{
//     return b.order.length - a.order.length;
// })
// console.log(sortClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


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


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


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
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelyshka{
    constructor(name, year, legCm) {
        this.name = name;
        this.year = year;
        this.legCm = legCm;
    }
}

console.log(Popelyshka);

let newGirl = [
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
console.log(newGirl);


class Prince {
    constructor(name,year,legCm) {
        this.name = name;
        this.year = year;
        this.legCm = legCm;
    }
}

let newPrince = new Prince('Maria',21,36);
console.log(newPrince);


let newPara = (newGirl,newPrince)=>{
    for (const newGirlElement of newGirl) {
        if (newGirlElement.legCm === newPrince.legCm){
            return`твоя дівчина ${newGirlElement.name}`
        }
    }
}
console.log(newPara(newGirl, newPrince));
