console.log("Assignment on static for Calculator class");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (num1, num2) {
        console.log("\nAddition  of ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
    };
    Calculator.sub = function (num1, num2) {
        console.log("\nSubtraction  of ".concat(num1, " - ").concat(num2, " = ").concat(num1 - num2));
    };
    Calculator.mul = function (num1, num2) {
        console.log("\nMultiplication  of ".concat(num1, " * ").concat(num2, " = ").concat(num1 * num2));
    };
    Calculator.div = function (num1, num2) {
        console.log("\nDivision  of ".concat(num1, " / ").concat(num2, " = ").concat(num1 / num2));
    };
    Calculator.mod = function (num1, num2) {
        console.log("\nModulo  of ".concat(num1, " % ").concat(num2, " = ").concat(num1 % num2));
    };
    return Calculator;
}());
Calculator.add(24, 6);
Calculator.sub(15, 7);
Calculator.mul(4, 3);
Calculator.div(18, 3);
Calculator.mod(20, 3);
