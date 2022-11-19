"use strict";
exports.__esModule = true;
var _15_module_in_typescript_1 = require("./15_module_in_typescript");
var obj2 = new _15_module_in_typescript_1.CalculatorModule();
var ModuleCalculator = /** @class */ (function () {
    function ModuleCalculator() {
    }
    ModuleCalculator.prototype.sub = function (num1, num2) {
        console.log("Substraction of number ".concat(num1, " - ").concat(num2, " = ").concat(num1 - num2));
    };
    return ModuleCalculator;
}());
var obj = new ModuleCalculator();
obj.sub(10, 5);
console.log(obj2.add(10, 5));
