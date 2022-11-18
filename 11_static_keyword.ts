console.log(`Assignment on static for Calculator class`);

class Calculator{
    static add(num1:number,num2:number){
console.log(`\nAddition  of ${num1} + ${num2} = ${num1+num2}`);

    }
    static sub(num1:number,num2:number){
        console.log(`\nSubtraction  of ${num1} - ${num2} = ${num1-num2}`);

    }
    static mul(num1:number,num2:number){
        console.log(`\nMultiplication  of ${num1} * ${num2} = ${num1*num2}`);

    }
    static div(num1:number,num2:number){
        console.log(`\nDivision  of ${num1} / ${num2} = ${num1/num2}`);

    }
    static mod(num1:number,num2:number){
        console.log(`\nModulo  of ${num1} % ${num2} = ${num1%num2}`);
    }
}
Calculator.add(24,6);
Calculator.sub(15,7);
Calculator.mul(4,3);
Calculator.div(18,3);
Calculator.mod(20,3);