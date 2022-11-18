class Student {
    private _userName: string;
 
    get name() : string {
     // format the data means set format for get data how to display it to outer user
     //like if u get data in plain text we can convert or transform it in encrypted
     return this._userName;
    }
    set name(name: string) {
        //here we can give validation or condition on which data is display to out
     if(name == "codemind") {
         this._userName = name;
     }
     
    }
   display() {
     console.log(this._userName);
   }
 }
 
 var objstudent = new Student();
 objstudent.name = "Codemind";
 console.log(objstudent.name);
 