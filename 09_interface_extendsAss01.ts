interface PizzaOrder {
    orderPizza(quantity:number);
}

interface BurgerOrder {
    orderBurger(burger:number);
}

interface OnlineFoodOrder extends PizzaOrder,BurgerOrder{
    orderPizza(quantity: number);
    orderBurger(burger:number);
    displayOrder():void;
}
console.log(`Interface extends Example with implementation`);

class OnlineFoodService implements OnlineFoodOrder{
    orderPizza(quantity: number=3) {
        console.log(`\nI am from interface 1 , I have ordered ${quantity} Pizza's`);
    }
    orderBurger(burger: number=7) {
        console.log(`\nI am from interface 2 , I have ordered ${burger} Burger's`);
    }
    displayOrder(): void {
        console.log(`I am from class `);
    }
    
}

const object = new OnlineFoodService();
object.displayOrder();
object.orderPizza();
object.orderBurger()