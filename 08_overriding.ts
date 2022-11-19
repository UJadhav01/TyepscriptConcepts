class BaseClass{
message(msg1:string,msg2:string){
    console.log(`Hello ${msg1} ${msg2}`)
}
}

class DerivedClass extends BaseClass{
    message(msg1:string,msg2:string){
        //use super to access data of parent class,super is always first sentence in derived
        super.message(msg1,msg2);
        console.log(`Hello ${msg1} ${msg2} , How are you...`)
    }
}
let base_classObject=new BaseClass();
base_classObject=new DerivedClass()
base_classObject.message('Shiavnshi','kale');