// 1. - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// console.log(User)
//
//
// // 2.створити пустий масив, наповнити його 10 об'єктами new User(....)
//
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
//
//
// // 3. - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// //     залишивши тільки об'єкти з парнuими id (filter)
//
//
// let Array = [
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
// const filteredUser = Array.filter((user) => {
//     return user.id % 2 === 0;
// })
// console.log(filteredUser)
//
//
// // 4 .- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//
// let Arra = [
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
// const filteredUsers = Arra.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(filteredUsers)
//
//
// // 5.- створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// // (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // 6.створити пустий <>, наповнити його 10 об'єктами Client
//
// let areey = [
//     new Client(1, 'Oleg', 'Ratan', 'ratun@gmail.com', '380939114121', ['iPhoneXR', 'iPhone12', 'iPhoone']),
// new Client(3, 'Ivan', 'Itaryk', 'itaryk@gmail.com', '380938914131', ['iPhone7','iPhone6','iPhone12Pro','iPhone11Pro']),
// new Client(5, 'Andry', 'Kira', 'kira@gmail.com', '380932214147', ['iPhoneX','AirPods']),
// new Client(4, 'Yuriy', 'Maranov', 'maranov@gmail.com', '380931112251', ['iPhone12','iPad7']),
// new Client(2, 'Petro', 'Ivaskiv', 'ivaskiv@gmail.com', '380936718851', ['iPhone11Pro','iPhone6Plus','iPhoneXR','iPhoneX','iPhone12']),
// new Client(6, 'Igor', 'Harok', 'harok@gmail.com', '380912214141', ['iPhoneXS','iPhone5']),
// ]
//
//
// // 7.- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// //     товарів в полі order по зростанню. (sort)
//
// let filterUser = areey.sort((b, a) => {
//     return a.order.length - b.order.length;
// })
// console.log(filterUser)
