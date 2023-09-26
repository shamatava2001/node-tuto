const EventEmiter = require('node:events');

class PizzaShop extends EventEmiter { 
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, topping){
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayOrder(){
        console.log(`Order Number is: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;