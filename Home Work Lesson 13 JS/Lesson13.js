// function goWork(isJobComplete) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobComplete) {
//                 resolve(999);
//             } else {
//                 reject('No work no money');
//             }
//         }, 100)
//     });
// }
//
// function goToEgypt(moneyForTour) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (moneyForTour < 450) {
//                 reject('Not enough money')
//             } else {
//                 console.log('HOOORAY')
//                 resolve(moneyForTour - 450);
//             }
//         }, 400)
//     })
// }
//
// function buySouvenirs(money, souvenirCount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const totalPrice = souvenirCount * 10;
//             if (totalPrice > money) {
//                 reject('Not enough');
//             } else {
//                 resolve(`Here you go. ${souvenirCount} items`)
//             }
//         }, 300)
//     })
// }
//
// goWork(true)
//   .then((money) => {
//     console.log('Good job. Here you go', money, '$');
//
//     return goToEgypt(money);
//   })
//   .then(moneyAfterTour => {
//     console.log('It was great vacation', moneyAfterTour);
//
//     return buySouvenirs(moneyAfterTour, 105)
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(reason => {
//     console.log('OOOOPS', reason);
//   })
//   .finally(() => {
//     console.log('FINAL')
//   })


function goWork(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (money) {
                resolve(1000)
            } else {
                reject('No work,no money')
            }

        }, 200)
    })
}

function goToshopping(moneyForShopping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const priceOfProducts = 550;
            if (moneyForShopping < priceOfProducts) {
                reject('Недостатньо коштів на покупки')
            } else {
                console.log('Ви купили продуктів на суму'+ ' ' + priceOfProducts + '$');
                resolve(moneyForShopping - priceOfProducts)
            }
        }, 300)
    })
}

function buyFuel(money, litr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Приїджаю на заправку');
            const fuelPrice = litr * 5
            if (fuelPrice > money) {
                console.log('Ціна за пальне'+ ' ' + fuelPrice + ',всього грошей' + money + '$');
                reject('Недостатньо коштів!');
            }
            else {
                resolve(`Ви заправили ${litr} літрів`)
            }
                },400)
    })
}
//
// goWork(true)
//     .then(money => {
//     console.log('Хороша робота,ти заробив', money, '$');
//     return goToshopping(money)
// })
//     .then(moneyForShopping => {
//         console.log('Це були хороші продукти,ваш залишок на рахунку'+ ' ' + moneyForShopping + '$');
//         return buyFuel (moneyForShopping,10)
//     })
//     .then(res =>{
//         console.log(res)
//     })
//     .catch(reason => {
//         console.log('OOOYYY NOOOOY', reason);
//     })
//     .finally(() =>{
//         console.log('The End');
//     })
//


// async function shops() {
//     const money = await goWork(true);
//     console.log('Хороша робота,ти заробив', money, '$');
//     const moneyForShopping = await goToshopping(money);
//     console.log('Це були хороші продукти,ваш залишок на рахунку'+ ' ' + moneyForShopping + '$');
//     const res = await buyFuel (moneyForShopping,10);
//     console.log(res);
// }
// shops()
