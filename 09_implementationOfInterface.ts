class Passenger {
    firstName:string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
}

var passenger = new Passenger("Jsck", "Sparrow", 102);

console.log(passenger.firstName + " " + passenger.lastName + " "+ passenger.frequentFlyerno);
