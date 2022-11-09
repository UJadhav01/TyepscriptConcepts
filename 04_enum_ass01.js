console.log("First example of cardinal direction using enum");
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["east"] = 1] = "east";
    direction[direction["south"] = 2] = "south";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
console.log(direction);
console.log(direction.east);
console.log(direction.north);
console.log(direction[0]);
console.log(direction[1]);
console.log("second example of media using enum");
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "newspaper";
    PrintMedia["Newsletter"] = "newsletter";
    PrintMedia["Magazine"] = "magazine";
    PrintMedia["Book"] = "book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia);
// Access String Enum 
console.log(PrintMedia.Newspaper); //returns newsletter
console.log(PrintMedia['Magazine']); //returns magazine
console.log(PrintMedia.Newsletter); //returns newsletter
console.log(PrintMedia['Book']); //returns book
console.log("3rd example bike brands using enum");
var BikeBrands;
(function (BikeBrands) {
    BikeBrands["TVS"] = "tvs";
    BikeBrands["RoyalEnfield"] = "royal enfield";
    BikeBrands["Yamaha"] = "yamaha";
    BikeBrands[BikeBrands["Honda"] = 5] = "Honda";
    BikeBrands["Bajaj"] = "bajaj";
    BikeBrands["KTM"] = "ktm";
})(BikeBrands || (BikeBrands = {}));
console.log(BikeBrands);
function showBrands(bikes) {
    switch (bikes) {
        case BikeBrands['bajaj']:
            console.log('Bajaj');
            break;
        case BikeBrands.KTM:
            console.log('ktm');
            break;
        case BikeBrands[5]:
            console.log('Honda');
            break;
        case BikeBrands['yamaha']:
            console.log('Yamaha');
            break;
        case BikeBrands['RoyalEnfield']:
            console.log('Royal Enfield');
            break;
        case BikeBrands.TVS:
            console.log('tvs');
            break;
        default:
            console.log('u enter invalid input or choice');
    }
}
showBrands(BikeBrands['bajaj']);
showBrands(BikeBrands.KTM);
showBrands(BikeBrands.TVS);
showBrands(BikeBrands.RoyalEnfield);
showBrands(BikeBrands['yamaha']);
showBrands(BikeBrands.Honda);
