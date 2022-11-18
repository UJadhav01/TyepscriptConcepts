type CarYear=number
type CarType=string
type CarModel=string

type Car={
    year:CarYear;
    type:CarType;
    model:CarModel
}
const carYear:CarYear=2009;
const carType:CarType="toyota";
const carModel:CarModel="first";

const car:Car={
    year: carYear,
type:carType,
model:carModel
}
console.log(car);
