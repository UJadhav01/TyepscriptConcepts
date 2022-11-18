var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("\nAssignment of polymorphism for 2 methods 1=> work() and 2=>mobile()");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.work = function () {
        console.log("\nHello I am from Person class work() , I have different forms or roles");
    };
    Person.prototype.mobile = function () {
        console.log("I am Person mobile() , and I always helps to perform different task");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.work = function () {
        console.log("\nHello I am from Student class work() , I am student of Codemind Technology");
    };
    Student.prototype.mobile = function () {
        console.log("I am student mobile() , student use me for camera and music player");
    };
    return Student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        console.log("\nHello I am from Employee class work() , I am self-employed");
    };
    Employee.prototype.mobile = function () {
        console.log("I am Employee mobile() , employee use me for storage or phone call , information gathering");
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.work = function () {
        console.log("Hello I am from Trainer class work() , currently I am doing training for web developer");
    };
    Trainer.prototype.mobile = function () {
        console.log("I am Trainer mobile() , and trainer can use me for online training , information sharing etc");
    };
    return Trainer;
}(Person));
var persons = new Array(new Student(), new Employee(), new Trainer());
for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
    var iterator = persons_1[_i];
    console.log(iterator.work());
}
// let array=[new Person(),new Student(),new Employee(),new Trainer()];
// for (const iterator of array) {
//     console.log(iterator.work(),iterator.mobile()); 
// }
