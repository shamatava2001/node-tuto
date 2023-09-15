const EventEmiter = require("node:events");

const eventEmiter = new EventEmiter();

eventEmiter.on("order", (order1, order2) => {
    console.log(`${order1} and ${order2} are ordered`);
})

setTimeout(()=>{
    eventEmiter.emit("order", "pizza", "soda");
}, 3000);
