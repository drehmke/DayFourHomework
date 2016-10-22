var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Declare Parent class - I want it to implement IProduct so that I know I have these properties
//abstract class Product implements IProduct {
var Product = (function () {
    function Product(name, price, productType) {
        this.name = name;
        this.price = price;
        this.productType = productType;
    }
    return Product;
}());
// Declare Children classes - because these are unique
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, price, age) {
        _super.call(this, name, price, "Cat"); // hardcoding the productType becuase at this point, I know what it _should_ be
        this.age = age;
        this.age = age;
    }
    return Cat;
}(Product));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, price, canFetch, earLength) {
        _super.call(this, name, price, "Dog");
        this.canFetch = canFetch;
        this.earLength = earLength;
        this.canFetch = canFetch;
        this.earLength = earLength;
    }
    return Dog;
}(Product));
var Toy = (function (_super) {
    __extends(Toy, _super);
    function Toy(name, price, material) {
        _super.call(this, name, price, "Toy");
        this.material = material;
        this.material = material;
    }
    return Toy;
}(Product));
// Create my products - 6 cats, 4 dogs, 3 toys
var cat1 = new Cat("Matt", 16.57, 13);
var cat2 = new Cat("Pookie", 25.56, 9);
var cat3 = new Cat("Loki", 25.63, 3);
var cat4 = new Cat("Fluffy", 65.45, 1);
var cat5 = new Cat("Mittens", 78.98, .5);
var cat6 = new Cat("Shadow", 15.36, 20);
var dog1 = new Dog("Barkspawn", 96.38, true, "short");
var dog2 = new Dog("Ralph", 25.01, false, "long");
var dog3 = new Dog("Boy", 75.54, true, "long");
var dog4 = new Dog("Princess", 43.86, false, "short");
var toy1 = new Toy("Pull Toy", 2.59, "string");
var toy2 = new Toy("Squeaky Newspaper", 3.65, "rubber");
var toy3 = new Toy("Laser Pointer", 5.36, "metal");
//console.log(cat1);
// Setup my array of products - they should all use the IProduct interface
var inventory = [cat1, cat2, cat3, cat4, cat5, cat6, dog1, dog2, dog3, dog4, toy1, toy2, toy3];
// Fun time!
var btnAll = document.getElementById('all');
var btnCat = document.getElementById('cats');
var btnDog = document.getElementById('dogs');
var btnToy = document.getElementById('toys');
function showProductDetails(products, display) {
    if (display === void 0) { display = "all"; }
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var prod = products_1[_i];
        var txtDisplay = void 0;
        var typeThis = void 0;
        if (prod.age) {
            typeThis = "cat";
        }
        else if (prod.earLength) {
            typeThis = "dog";
        }
        else if (prod.material) {
            typeThis = "toy";
        }
        if (display == "cat" && typeThis == "cat") {
            txtDisplay = "The " + typeThis + " named " + prod.name + " will cost you $" + prod.price + ".";
        }
        else if (display == "dog" && typeThis == "dog") {
            txtDisplay = "The " + typeThis + " named " + prod.name + " will cost you $" + prod.price + ".";
        }
        else if (display == "all") {
            txtDisplay = "The " + typeThis + " " + prod.name + " will cost you $" + prod.price + ".";
        }
        if (txtDisplay != undefined) {
            console.log(txtDisplay);
        }
    }
}
btnAll.addEventListener('click', function () { showProductDetails(inventory, "all"); });
btnCat.addEventListener("click", function () { showProductDetails(inventory, "cat"); });
btnDog.addEventListener("click", function () { showProductDetails(inventory, "dog"); });
