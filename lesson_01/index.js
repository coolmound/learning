// // hello Alex
// // const myArray = [1, 2, 3, 4, 5];
// // myArray = [1, 3, 4, 5, 6]; TypeError: Assignment to constant variable.
// // myArray.shift();
// // function newFunc(a, b) {
// //     let newNumb = b; 
// //     for (let i = 0; i < a; i++) {
// //         newNumb += newNumb;
// //   console.log(newNumb)
// //     }
//     //console.log(newNumb);
// // }
// // newFunc(5, 2)
// //console.log(myArray);
// //console.error(myArray);
// ////////////////////////////////////////////////////
// // створити всі типи циклів в стрілочній ф-ції

// // Цикл for: Використовується, коли відомо, скільки разів потрібно виконати код.
// const coffee1 = (a, b) => {
//     for (i = 0; i < a; i++){
//         console.log(i)
//     }
// }

// // Цикл while: Використовується, коли потрібно виконувати код, поки виконується певна умова.

// const yelowHoney = a => {
//     let i = 5;
//     while (i <= 8) {
//         console.log(i);
//         i += a;
//     }
//     return i;
// }
// yelowHoney(3);


// // Цикл do...while: Схожий на while, але спочатку виконує блок коду, а потім перевіряє умову. Це гарантує, що блок коду виконається хоча б один раз.
// const creamyNugat = (q, s) => {
//     let i = 9;
//     do {
//         console.log(i+=q);
//     } while (i < 9);
//     }
// creamyNugat(3);

// // Цикл for...in: Використовується для перебору властивостей об'єкта.
// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// // Цикл for...of: Використовується для перебору ітерованих об'єктів, таких як масиви.
// const coffee = (nameCoffee) => {
//     for (let value of nameCoffee) {
//         console.log(value);
//     }
//     return 'ok'
// }
// const namesCoffee = ['yellow', 'creamy', 'pink']
// console.log(coffee(namesCoffee))

// // function coffee(nameCoffee) {
// //     for (let value of nameCoffee) {
// //         console.log(value);
// //     }
// // }
// const showThis = () => {
//   console.log("this in showThis: ", this );
// };

// showThis(); // this in showThis: window
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
