// Declare Interface
interface IProduct {
    name: string;
    price: number;
    productType: string;
    age?: number;
    earLength?: string;
    material?: string;
}
// Additional Interfaces for specific product types
interface ICat implements IProduct {
    age: number;
}
interface IDog implements IProduct {
    canFetch: boolean;
    earLength: string;
}
interface IToy implements IProduct {
    material: string;
}
// Declare Parent class - I want it to implement IProduct so that I know I have these properties
//abstract class Product implements IProduct {
abstract class Product {
    constructor(public name: string, public price: number, public productType: string) { }
}
// Declare Children classes - because these are unique
class Cat extends Product implements ICat {
    constructor(name: string, price: number, public age: number) {
        super(name, price, `Cat`); // hardcoding the productType becuase at this point, I know what it _should_ be
        this.age = age;
    }
}

class Dog extends Product implements IDog {
    constructor(name: string, price: number, public canFetch: boolean; public earLength: string) {
        super(name, price, `Dog`);
        this.canFetch = canFetch;
        this.earLength = earLength;
    }
}

class Toy extends Product implements IToy {
    constructor(name: string, price: number, public material: string) {
        super(name, price, `Toy`);
        this.material = material;
    }
}

// Create my products - 6 cats, 4 dogs, 3 toys
let cat1: Cat = new Cat(`Matt`, 16.57, 13);
let cat2: Cat = new Cat(`Pookie`, 25.56, 9);
let cat3: Cat = new Cat(`Loki`, 25.63, 3);
let cat4: Cat = new Cat(`Fluffy`, 65.45, 1);
let cat5: Cat = new Cat(`Mittens`, 78.98, .5);
let cat6: Cat = new Cat(`Shadow`, 15.36, 20);
let dog1: Dog = new Dog(`Barkspawn`, 96.38, true, `short`);
let dog2: Dog = new Dog(`Ralph`, 25.01, false, `long`);
let dog3: Dog = new Dog(`Boy`, 75.54, true, `long`);
let dog4: Dog = new Dog(`Princess`, 43.86, false, `short`);
let toy1: Toy = new Toy(`Pull Toy`, 2.59, `string`);
let toy2: Toy = new Toy(`Squeaky Newspaper`, 3.65, `rubber`);
let toy3: Toy = new Toy(`Laser Pointer`, 5.36, `metal`);
//console.log(cat1);
// Setup my array of products - they should all use the IProduct interface
let inventory: IProduct[] = [cat1, cat2, cat3, cat4, cat5, cat6, dog1, dog2, dog3, dog4, toy1, toy2, toy3];

// Fun time!
let btnAll = <HTMLButtonElement>document.getElementById('all');
let btnCat = <HTMLButtonElement>document.getElementById('cats');
let btnDog = <HTMLButtonElement>document.getElementById('dogs');
let btnToy = <HTMLButtonElement>document.getElementById('toys');

function showProductDetails(products: IProduct[], display = `all`) {
    for (let prod of products) {
        let txtDisplay: string;
        let typeThis: string;

        if (prod.age)               { typeThis = `cat`; }
        else if (prod.earLength)    { typeThis = `dog`; }
        else if (prod.material)     { typeThis = `toy`; }
        if (display == `cat` && typeThis == `cat`) {
            txtDisplay = `The ${typeThis} named ${prod.name} will cost you $${prod.price}.`;
        } else if (display == `dog` && typeThis == `dog`) {
            txtDisplay = `The ${typeThis} named ${prod.name} will cost you $${prod.price}.`;
        } else if (display == `all`) {
            txtDisplay = `The ${typeThis} ${prod.name} will cost you $${prod.price}.`;
        }
        if (txtDisplay != undefined) { console.log(txtDisplay); }
        /*
        console.log(prod.productType);
        if (prod.productType === `Cat`) {
            txtDisplay = `The ${prod.productType.toLowerCase()} named ${prod.name} will cost you $${prod.price}.`;
        } else if (prod.productType === `Dog`) {
            txtDisplay = `The ${prod.productType.toLowerCase()} named ${prod.name} will cost you $${prod.price}.`;
        } else if (prod.productType === `Toy`) {
            txtDisplay = `The ${prod.productType.toLowerCase()} ${prod.name} will cost you $${prod.price}.`;
        }
        if (txtDisplay != undefined) { console.log(txtDisplay); }
        */
    }
}


btnAll.addEventListener('click', () => { showProductDetails(inventory, `all`); });
btnCat.addEventListener(`click`, () => { showProductDetails(inventory, `cat`); });
btnDog.addEventListener(`click`, () => { showProductDetails(inventory, `dog` });