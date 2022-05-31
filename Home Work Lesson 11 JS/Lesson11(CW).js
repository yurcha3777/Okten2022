// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage

// let name = document.forms.creatForm.name;
// let age = document.forms.creatForm.age;
// let btn = document.getElementById('btn')
//
// let key = 'key'
// let add = (name, age) => {
//     let user = {
//         name: name,
//         age: age,
//     }
//     localStorage.setItem(key, JSON.stringify(user))
// };
// btn.onclick = () => {
//     add(name.value, age.value)
// }



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let model = document.forms.creatorForm1.model;
// let type = document.forms.creatorForm1.type;
// let volume = document.forms.creatorForm1.volume;
// let btn1 = document.getElementById('btn1')
// let key1 = 'keycar'
//
// let save = (model, type, volume) => {
//     let arr = JSON.parse(localStorage.getItem(key1)) || [];
//
//     arr.push({model, type, volume})
//     localStorage.setItem(key1, JSON.stringify(arr))
// };
// btn1.onclick = () => {
//     save(model.value, type.value, volume.value)
// }

const {model, type, volume} = document.forms.creatorForm1
const btn = document.getElementById('btn')
const key = 'key'

const save = (model, type, volume) => {
  let arr = JSON.parse(key, JSON.stringify(arr))
    arr.push({model, type, volume})
    localStorage.setItem(key,JSON.stringify(arr))
}





