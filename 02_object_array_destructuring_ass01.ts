//created objects of Employee class
console.log(`Assignment on array and object destructuring`);
console.log(`=======Object destructuring 1st example for Employee object========= `);
console.log(`\n Traversed object Employee using for in loop`);

var Employee : any = {
    emp_id:2,
    emp_name: 'Vrinada',
    emp_salary: 50000,
    emp_company: 'TCS',
    designation:undefined
}

//for in loop for traverse object
for (const key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        if(Employee[key]!=undefined){
            console.log(Employee[key]);
        }
    }
}

let {emp_id,emp_name,emp_salary,emp_company,designation='CEO', emp_department='HR'}=Employee;
console.log(`\n Adding default value to property designation and adding new object property emp_department using destructuring`);

console.log(`Employee Id = ${emp_id} , Name = ${emp_name} , Salary = ${emp_salary} , Company = ${emp_company} , Designation = ${designation}, EmpDep = ${emp_department}`);

// const removeprp='emp_id';
// const {[removeprp]:remove,...rest}=Employee;
//  //arrayOfNumbers.splice(2,1); // we can do also 
// console.log(`\nAfter removed property emp_id ,`,rest);

console.log(`\n=======2nd e.g. Object destructuring for assign alias names to object properties and display data========= `);
const TechnologyKnows = {
    frontend: "Angular",
    backend: "Node",
    database: "MongoDB",
  };
  console.log(TechnologyKnows);
  
  const { frontend: frontend, backend: backend } = TechnologyKnows; // this called assigning values to new variable
  console.log(frontend, backend);
  
// array destructuring
let arrayOfVaccine:Array<any> = ['J&J','Pfizer','Sputnik']

console.log(`\n======================Array destructuring 1st example===================== `);
console.log(`Initial array`,` arrayOfVaccine = `,arrayOfVaccine);
arrayOfVaccine.push('Covaxin');
console.log(`Array after adding Covaxin`,` arrayOfVaccine = `,arrayOfVaccine);
// traversing array using simple for loop
let element='';
for (let index = 0; index < arrayOfVaccine.length; index++) {
    element += arrayOfVaccine[index]+" ";
}
console.log(`traversed array values using simple for loop = `,element);

 let [ele0, ele1, ele2, ele3] = arrayOfVaccine;
 console.log(`get data from array destructuring = `,[ele0, ele1, ele2, ele3]);
 
//  console.log(`\n======2nd example swapping of two array values using destructuring===================== `);
// const arrayName:Array<string>=['Radha','Krisha'];
// console.log(`array values before swapping `,arrayName);
// let [Radha,Krisha]=arrayName;

// console.log(`array values after swapping using destructuring `,[Radha,Krisha]=[Krisha,Radha]);

