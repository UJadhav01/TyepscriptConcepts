var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
//enum for weekends
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Saturday"] = 6] = "Saturday";
    Weekend[Weekend["Sunday"] = 7] = "Sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend[6]);
console.log(Weekend[7]);
