class Organizer{
    id:number=1;
    name:string='Aditya'; 
   
    //for displaying id and name of organizer
    constructor(){
        console.log(`My Id is = ${this.id} and my name is = ${this.name}`);
    }
     //display data of organizer message
     display(){
        console.log(`Hello sunshines I am your organizer...`);
    }
}

class ClassEvent extends Organizer{
    id:number;          //event id
    name:string;        //name of event
    description:string;   //description of event
    category:string;    //for type of event like business,social,private
    eventDate:string //for get date of event
    startTime:number;        //for time of event
    constructor(id:number,name:string,description:string,category:string,eventDate:string,startTime:number){
        super();
        this.id=id
        this.name=name
        this.description=description
        this.category=category
        this.eventDate=eventDate
        this.startTime=startTime
    }
    //display all data of event
    display(){
        super.display();
        console.log(`\nEvent Id = ${this.id}\nName of Event = ${this.name}\ndescription = ${this.description}\ncategory = ${this.category}\nParty date = ${this.eventDate} | time = ${this.startTime} pm`);
    }
}

class Venue extends Organizer{
    id:number;
    name:string;

  description:string //small description
  category:string  //venue type like birthday event games time,snack time etc
  venue:string  //for venue detail
  address:string  //for address
    constructor(id:number,name:string,description:string,address:string){
        super();
        this.id=id
        this.name=name
        this.description=description
        this.address=address
    }
    //for display data of venue
    display(){
        console.log(`\nVenue Id = ${this.id}\nName of Venue = ${this.name}\nVenue description = ${this.description}\nAddress = ${this.address}`);
    }
   
}
let date=new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
let startTime1=(date.getHours())

let array:Organizer[]=[new ClassEvent(2,'Birthday Party',' Lets Celebrate...!,\n\t\t\t\tJoin us in celebrating day at jack 11th birthday party!','this is family event with an enjoyable evening with music , dinner and dancing',currentDate,startTime1),
new Venue(2,'Shivneri hotel','with parking facility','\tShivneri hotel ,\n\t\t\t102 hall,\n\t\t\tstation road solapur')];
for(var event_org of array) {
    event_org.display();
}