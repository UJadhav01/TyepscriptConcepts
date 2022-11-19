let courses = ["Angular", "React", "Nodejs"];

console.log(courses.toString());

interface IEmployee {
    id: number;
    //name: string;
    //lastname: string;
}

let e1: IEmployee;

let e2 = { id: 123, name: "John"};

//always works when 
e1 = e2 ; // type casting . 

//e2 = e1; //
