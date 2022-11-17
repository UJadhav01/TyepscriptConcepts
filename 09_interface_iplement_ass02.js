console.log("Interface implementation example");
var Display = /** @class */ (function () {
    function Display() {
        this.teacherName = 'xyz';
        this.teacherQualification = 'master of cs';
        this.teacherYearEx = 9;
        this.teacherSpecialization = 'data science';
        this.MIN = 7;
        this.firstName = 'Aditya';
        this.lastName = 'Kale';
    }
    Display.prototype.print = function () {
        console.log("\nI am from interface IPrintable , Display class has implements me,\nYou can print ".concat(this.MIN, " copies"));
    };
    Display.prototype.show = function () {
        console.log("\nI am from interface ITeacher");
        console.log("Teacher name = ".concat(this.teacherName, " teacher Year of Experience= ").concat(this.teacherYearEx, " Specialization in =").concat(this.teacherSpecialization));
    };
    Display.prototype.display = function () {
        console.log("\nI am class member my data is firstName=".concat(this.firstName, " and last name=").concat(this.lastName));
    };
    return Display;
}());
var object1 = new Display();
object1.print();
object1.show();
object1.display();
