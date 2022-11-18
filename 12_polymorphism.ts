
console.log(`\nAssignment of polymorphism for 2 methods 1=> work() and 2=>mobile()`);

class Person{
work(){
console.log(`\nHello I am from Person class work() , I have different forms or roles`);
}
mobile(){
    console.log(`I am Person mobile() , and I always helps to perform different task`);
}
}
class Student extends Person{
work(){
    console.log(`\nHello I am from Student class work() , I am student of Codemind Technology`);
}
    mobile(){
        console.log(`I am student mobile() , student use me for camera and music player`);
    }
}
class Employee extends Person{
    work(){
        console.log(`\nHello I am from Employee class work() , I am self-employed`);
    }
        mobile(){
            console.log(`I am Employee mobile() , employee use me for storage or phone call , information gathering`);
        }
}
class Trainer extends Person{
    work(){
        console.log(`Hello I am from Trainer class work() , currently I am doing training for web developer`);
    }
    mobile(){
        console.log(`I am Trainer mobile() , and trainer can use me for online training , information sharing etc`);
    }
}
let persons:Person[] = new Array( new Student(), new Employee(), new Trainer () ) ;

for (const iterator of persons) {
    console.log(iterator.work()); 
}

// let array=[new Person(),new Student(),new Employee(),new Trainer()];
// for (const iterator of array) {
//     console.log(iterator.work(),iterator.mobile()); 
// }


