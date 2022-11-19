import{CalculatorModule} from './15_module_in_typescript';
let obj2=new CalculatorModule()

class ModuleCalculator{
    sub(num1:number,num2:number):void{
        console.log(`Substraction of number ${num1} - ${num2} = ${num1-num2}`);
        
    }
}
let obj=new ModuleCalculator();
obj.sub(10,5);

console.log(obj2.add(10,5));