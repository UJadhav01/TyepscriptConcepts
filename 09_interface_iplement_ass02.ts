interface IPrintable{
MIN:number;
print():void;
}
interface ITeacher{  
    teacherName:string;
    teacherQualification?:string;
    teacherYearEx:number;
    teacherSpecialization:string;
    show():void;  
    }  

    console.log(`Interface implementation example`);
    

class Display implements IPrintable,ITeacher{
    teacherName: string='xyz';
    teacherQualification: string='master of cs';
    teacherYearEx: number=9;
    teacherSpecialization: string='data science';
    MIN: number=7; 
    firstName:string='Aditya';
    lastName:string='Kale' 
    print(){
        console.log(`\nI am from interface IPrintable , Display class has implements me,\nYou can print ${this.MIN} copies`);
    } 
    show(){
        console.log(`\nI am from interface ITeacher`);
        console.log(`Teacher name = ${this.teacherName} teacher Year of Experience= ${this.teacherYearEx} Specialization in =${this.teacherSpecialization}`); 
    }   
    display(){
        console.log(`\nI am class member my data is firstName=${this.firstName} and last name=${this.lastName}`);
    }
}  
let object1= new Display();  
object1.print();  
object1.show(); 
object1.display();