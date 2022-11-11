/**
 * Grade calculator
prompt use for getting value.
math, physics , chem numeric type
calculate average of these three subject
divide result by three .
once you have average
you can use if else lader for grade .
if avrage < 70 then C grade
if avarage  > 70 < 90 B grade
if avarage  > 90 A grade

 */
document.write("Grade assignment using function and for take input from user using prompt");
function gradeCalculator() {
    var mathMarks = prompt("Please enter maths marks");
    var physicsMarks = prompt("Please enter physics marks");
    var chemistryMarks = prompt("Please enter chemistry marks");
    //console.log(mathMarks,physicsMarks,chemistryMarks);
    document.write("<br/><br/>Your subject marks are: <br/><br/>Math = ", mathMarks, " <br/><br/>Physics = ", physicsMarks, " <br/><br/>Chemistry = ", chemistryMarks);
    var averageMarks = ((+mathMarks) + (+physicsMarks) + (+chemistryMarks)) / (+3);
    if (averageMarks < 0 || averageMarks < 35) {
        return document.write("<br/><br/>Your average marks are ".concat(averageMarks, " , you are fail"));
    }
    else if (averageMarks >= 35 && averageMarks < 70) {
        return document.write("<br/><br/>Your average marks are ".concat(averageMarks, " , you get grade C"));
    }
    else if (averageMarks >= 70 && averageMarks < 90) {
        return document.write("<br/><br/>Your average marks are ".concat(averageMarks, " , you get grade B"));
    }
    else if (averageMarks >= 90 && averageMarks <= 100) {
        return document.write("<br/><br/>Your average marks are ".concat(averageMarks, " , you get grade A"));
    }
}
gradeCalculator();
