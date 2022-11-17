//implementation for interface 
var Product = {
    productID: 1,
    productName: 'xyz',
    productPrice: 4000,
    display: function () {
        console.log("Product id = ".concat(this.productID, " productName = ").concat(this.productName, "  productPrice = ").concat(this.productPrice));
    }
};
Product.display();
var Android = {
    productID: 2,
    productName: 'android cell',
    productDescription: 'related to product adroid',
    productPrice: 44000,
    display: function () {
        console.log("Product id = ".concat(this.productID, " productName = ").concat(this.productName, " productDescription = ").concat(this.productDescription, " productPrice = ").concat(this.productPrice));
    }
};
Android.display();
