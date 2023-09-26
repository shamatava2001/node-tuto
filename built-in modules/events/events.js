const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order Received! baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mashrums"); 


// const EventEmiter = require("node:events");

// const eventEmiter = new EventEmiter();

// eventEmiter.on("order", (order1, order2) => {
//     console.log(`${order1} and ${order2} are ordered`);
// })

// setTimeout(()=>{
//     eventEmiter.emit("order", "pizza", "soda");
// }, 3000);
