//created objects of Employee class
console.log("Assignment on array and object destructuring");
console.log("=======Object destructuring 1st example for Employee object========= ");
console.log("\n Traversed object Employee using for in loop");
var Employee = {
    emp_id: 2,
    emp_name: 'Vrinada',
    emp_salary: 50000,
    emp_company: 'TCS',
    designation: undefined
};
//for in loop for traverse object
for (var key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        if (Employee[key] != undefined) {
            console.log(Employee[key]);
        }
    }
}
var emp_id = Employee.emp_id, emp_name = Employee.emp_name, emp_salary = Employee.emp_salary, emp_company = Employee.emp_company, _a = Employee.designation, designation = _a === void 0 ? 'CEO' : _a, _b = Employee.emp_department, emp_department = _b === void 0 ? 'HR' : _b;
console.log("\n Adding default value to property designation and adding new object property emp_department using destructuring");
console.log("Employee Id = ".concat(emp_id, " , Name = ").concat(emp_name, " , Salary = ").concat(emp_salary, " , Company = ").concat(emp_company, " , Designation = ").concat(designation, ", EmpDep = ").concat(emp_department));
// const removeprp='emp_id';
// const {[removeprp]:remove,...rest}=Employee;
//  //arrayOfNumbers.splice(2,1); // we can do also 
// console.log(`\nAfter removed property emp_id ,`,rest);
console.log("\n=======2nd e.g. Object destructuring for assign alias names to object properties and display data========= ");
var TechnologyKnows = {
    frontend: "Angular",
    backend: "Node",
    database: "MongoDB"
};
console.log(TechnologyKnows);
var frontend = TechnologyKnows.frontend, backend = TechnologyKnows.backend; // this called assigning values to new variable
console.log(frontend, backend);
// array destructuring
var arrayOfVaccine = ['J&J', 'Pfizer', 'Sputnik'];
console.log("\n======================Array destructuring 1st example===================== ");
console.log("Initial array", " arrayOfVaccine = ", arrayOfVaccine);
arrayOfVaccine.push('Covaxin');
console.log("Array after adding Covaxin", " arrayOfVaccine = ", arrayOfVaccine);
// traversing array using simple for loop
var element = '';
for (var index = 0; index < arrayOfVaccine.length; index++) {
    element += arrayOfVaccine[index] + " ";
}
console.log("traversed array values using simple for loop = ", element);
var ele0 = arrayOfVaccine[0], ele1 = arrayOfVaccine[1], ele2 = arrayOfVaccine[2], ele3 = arrayOfVaccine[3];
console.log("get data from array destructuring = ", [ele0, ele1, ele2, ele3]);
//  console.log(`\n======2nd example swapping of two array values using destructuring===================== `);
// const arrayName:Array<string>=['Radha','Krisha'];
// console.log(`array values before swapping `,arrayName);
// let [Radha,Krisha]=arrayName;
// console.log(`array values after swapping using destructuring `,[Radha,Krisha]=[Krisha,Radha]);
