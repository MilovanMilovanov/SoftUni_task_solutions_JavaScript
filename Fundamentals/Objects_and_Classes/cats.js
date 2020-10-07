function catalogue(arrStrings) {
    let products = {};
    let sortedFirstLetters = [];

    let sortedProducts = arrStrings.slice(0).sort((a, b) => a.localeCompare(b));

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
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])