//interface has always declaration not implementation
interface iProduct{
    productID:number,
    productName:string,
    productDescription?:string,//? make this optional property there is no deed to always implement it
    productPrice:number,
    display():void;
}

//implementation for interface 
const Product:iProduct={
    productID:1,
    productName:'xyz',
    productPrice:4000,
    display(){
        console.log(`Product id = ${this.productID} productName = ${this.productName}  productPrice = ${this.productPrice}`);
        
    }
}

Product.display();
const Android:iProduct={
    productID:2,
    productName:'android cell',
    productDescription:'related to product adroid',
    productPrice:44000,
    display(){
        console.log(`Product id = ${this.productID} productName = ${this.productName} productDescription = ${this.productDescription} productPrice = ${this.productPrice}`);
    }
}
Android.display();
