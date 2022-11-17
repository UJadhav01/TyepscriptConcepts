console.log("Interface extends Example with implementation");
var OnlineFoodService = /** @class */ (function () {
    function OnlineFoodService() {
    }
    OnlineFoodService.prototype.orderPizza = function (quantity) {
        if (quantity === void 0) { quantity = 3; }
        console.log("\nI am from interface 1 , I have ordered ".concat(quantity, " Pizza's"));
    };
    OnlineFoodService.prototype.orderBurger = function (burger) {
        if (burger === void 0) { burger = 7; }
        console.log("\nI am from interface 2 , I have ordered ".concat(burger, " Burger's"));
    };
    OnlineFoodService.prototype.displayOrder = function () {
        console.log("I am from class ");
    };
    return OnlineFoodService;
}());
var object = new OnlineFoodService();
object.displayOrder();
object.orderPizza();
object.orderBurger();
