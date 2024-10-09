// функціональне програмування
const myFunction = function () {
    return 2;
}

const kuka = (a, lol) => {
    return a * lol();
}
console.log(kuka(10, myFunction));

const milk = (b) => {
    return typeof (b);
}
console.log(milk([])); 
const coffeeTypes = ['arabika', 'rabusta', '3in1', 'nescafe', 'nesquick']
const currentDrink = (a) => {
    return coffeeTypes[a];
}
const barMen = (order, selectOrder, selectNumber) => {
    return `${order} buy ${selectOrder(selectNumber)}`
}  

const res = barMen('sanchez', currentDrink, 2);
console.log(res);