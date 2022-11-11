function doubleMe(x:number);//function declaration 
function doubleMe(x:string);//function declaration
function doubleMe(x:string[]);//function declaration

//function implementation
function doubleMe(x:any){
    //check type of value to perform particular operation
if(x && typeof x==='number'){
console.log(x*2);
}
else if(x && typeof x==="string"){
    console.log(x+ " "+x);
    
}
else if(Array.isArray(x)){
   return x.map(value=>console.log(value+" "+value));  
//map create array for each element
}
}
doubleMe(2);
doubleMe("shiv");
doubleMe(["shiv","kale"]);

///factorial using ...rest parameter
var product = function (...nums) 
{
    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

//arrow Function
//anonymous arrow function with single arg
let funName=(message:string):string=>{
    return "hello " + message;
}
console.log(funName("Shiv"));
//anonymous arrow function with multiple arg

var multiply = (num1:number, num2:number):number=> {
    return num1 * num2;
}
console.log(multiply(2,7));

