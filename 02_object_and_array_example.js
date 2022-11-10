//creating object
var a1 = {
    productId: 1,
    productName: 'iPhone',
    productPrice: 56000
};
console.log(a1);
console.log(a1.productId);
console.log(a1.productName);
//traverse object
// for (const iterator of a1) {
//     console.log(iterator);
// }
for (var key in a1) {
    if (Object.prototype.hasOwnProperty.call(a1, key)) {
        var element = a1[key];
        console.log(element);
    }
}
//array which stores only numbers
var array = [2, 3, 5, 6, 7, 8];
console.log(array);
//array which stores any type of data
var array2 = ['typescript', 2, true];
console.log(array2);
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var person = {
    firstName: 'John',
    lastName: 'Doe'
};
var firstName = person.firstName, lastName = person.lastName;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
/**Prior to ES6, when you want to assign properties of the person object to variables, you typically do it like this:

let firstName = person.firstName;
let lastName = person.lastName;
Code language: JavaScript (javascript)
ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

let { firstName: fname, lastName: lname } = person;
Code language: JavaScript (javascript)
In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively. */
function display(id, name, role) {
    if (role === void 0) { role = 'admin'; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
