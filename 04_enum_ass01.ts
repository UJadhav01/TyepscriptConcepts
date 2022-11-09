console.log(`First example of cardinal direction using enum`);

enum direction{
    north,
    east,
    south,
    west
}
console.log(direction);

console.log(direction.east);
console.log(direction.north);
console.log(direction[0]);
console.log(direction[1]);

console.log(`second example of media using enum`);

enum PrintMedia {
    Newspaper = "newspaper",
    Newsletter = "newsletter",
    Magazine = "magazine",
    Book = "book"
}
console.log(PrintMedia);

// Access String Enum 
console.log(PrintMedia.Newspaper); //returns newsletter
console.log(PrintMedia['Magazine']);//returns magazine
console.log(PrintMedia.Newsletter);//returns newsletter
console.log(PrintMedia['Book']);//returns book

console.log(`3rd example bike brands using enum`);
enum BikeBrands{
    TVS='tvs',
    RoyalEnfield='royal enfield',
    Yamaha='yamaha',
    Honda=5,
    Bajaj='bajaj',
    KTM='ktm'
}
console.log(BikeBrands);

function showBrands(bikes:BikeBrands){
    switch(bikes){
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