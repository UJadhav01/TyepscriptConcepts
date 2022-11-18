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


interface IFlight {
    flightNo: number;
    from: string;
    to: string;
    display():void;
}

class Flight implements IFlight {
    flightNo: number;
    from: string;
    to: string;

    constructor(flightNo: number, from: string, to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to ; 
    }
    display() {
        console.log(this.flightNo,this.from,this.to);
        
    }
}


var objFlight = new Flight(123, "Mumbai", "UK");
objFlight.display();