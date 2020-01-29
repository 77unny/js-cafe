const { MENU } = require('./menu');
class Barista {
    constructor() {
        this.makeCount = 0;
        this.makeList = [];
    }
    addMakeList(takeOrder) {
        this.makeList.push(takeOrder);
        this.makeCount++;
        this.makeOrder();
    }
    isAcceptable() {
        return this.makeCount < 2;
    }
    makeOrder() {
        const order = this.makeList.shift(); // A1형태
        const [user, menu] = order.split('');
        const indexTime = 1;
        const menuTime = MENU[menu][indexTime];
        setTimeout(()=>{
            console.log(`${MENU[menu][0]}를 완성했습니다.`)
        },menuTime)
        this.makeCount--;
    }
}

module.exports = { Barista };
-[];
