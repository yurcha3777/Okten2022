// зяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment
//     Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

//
// // b)
//  let tagUl = document.querySelectorAll('ul');
// console.log(tagUl);
// tagUl[0].style.with = '400px';
// // c)
// let byLinkListWith = document.getElementsByClassName('linkList');
// byLinkListWith[0].style.with = '50%'
// // d)
// let txtList = document.getElementsByClassName('listElement2');
// console.log(txtList);
// txtList[0].innerHTML = '<h3>NEW TEXT</h3>'
// // e)
// let tagLi = document.getElementsByTagName('li');
// console.log(tagLi);
// for (const tagLiElement of tagLi) {
//     tagLiElement.style.backgroundColor = 'grey'
// }
// // f)
// let byClassAnchor = document.getElementsByTagName('a');
// console.log(byClassAnchor);
// for (const byClassAnchorElement of byClassAnchor) {
//     byClassAnchorElement.classList.add('anchor')
//     console.log(byClassAnchor);
// }
// // g)
// let byFontSizeLink = document.getElementsByTagName('a');
// console.log(byFontSizeLink);
// for (const byFontSizeLinkElement of byFontSizeLink) {
//     console.log(byFontSizeLinkElement);
//     if (byFontSizeLinkElement.innerText === 'link3'){
//         byFontSizeLinkElement.style.fontSize = '40px'
//     }
// }
// // h)
// let newElementsXXX = document.querySelectorAll('a')
// console.log(newElementsXXX);
// for (const newElementsXXX1 of newElementsXXX) {
//     let newCLass = newElementsXXX1.innerText
//     newElementsXXX1.classList.add(`element_XXX_${newCLass}`)
// }
// console.log(newElementsXXX);
//
// // i)
// // let fonSubheader = document.getElementsByClassName('sub-header');
// // console.log(fonSubheader);
// // for (const fonSubheaderElement of fonSubheader) {
// //     fonSubheaderElement.style.color = prompt('Enter color: (blue,green,red...)');
// // }
// // j)
// // let replaeSub = document.getElementsByClassName('sub-header');
// // console.log(replaeSub);
// // for (const replaeSubElement of replaeSub) {
// //     console.log(replaeSubElement);
// //     if (replaeSubElement.innerText === 'content 2 segment'){
// //         replaeSubElement.style.color = prompt('Enter color:(blue,green,yellow...)')
// //     }
// // }
// // k)
// let getElementContent = document.getElementsByClassName('content_1');
// getElementContent[0].innerText = prompt('Enter txt:(......)')

// // l)
// // let newElementP = document.getElementsByTagName('p');
// // newElementP[0].style.padding = '20px'
// // newElementP[1].style.padding = '20px'
// // m)
// // let replacetext2 = document.getElementsByClassName('text2')
// // replacetext2[0].innerText = 'Sep-2021'
