function catalogue(arrStrings) {
    let products = {};
    let sortedFirstLetters = [];

    let sortedProducts = arrStrings
        .slice(0)
        .sort((a, b) => a.localeCompare(b));

    sortedProducts.forEach(element => {
        if (!sortedFirstLetters.includes(element[0])) {
            sortedFirstLetters.push(element[0])
        }
    });

    sortedFirstLetters.forEach(currentLetter => {
        let productsWithCurrentFirstLetter = [];
        while (sortedProducts.length > 0) {
            if (sortedProducts[0][0] === currentLetter) {
                let [name, price] = sortedProducts.shift().split(' : ');
                productsWithCurrentFirstLetter.push(`${name}: ${price}`);
            } else {
                break;
            }
        }
        products[currentLetter] = productsWithCurrentFirstLetter;
    });

    for (let key in products) {
        console.log(key);
        products[key].forEach(currentProduct => {
            console.log(`  ${currentProduct}`);
        });
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);


/*
You have to create a sorted catalogue of store products. You will be given the products’ names and prices.
You need to order them by alphabetical order. 
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output you must print all the products in a specified format.
They must be ordered exactly as specified above.
The products must be divided into groups, by the initial of their name.
The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names.
For more info check the examples.
*/