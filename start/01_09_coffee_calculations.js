// Write your code here
const coffeeList = [2,3,1,5];
const perCoffee = 1.25;

const total = coffeeList.reduce((acc, cur) => acc + (cur * perCoffee))
console.log(`The total bill is ${total}$`);
