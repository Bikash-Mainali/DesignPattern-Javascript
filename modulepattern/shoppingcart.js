const shoppingCart = (
    function () {
        let basket = []; //basket would be private as this is inside IEFE

        return {
            upsertItem: (item) => {
                if (!basket.includes(item)) {
                    //add item to the basket
                    basket.push(item);
                }
                updateBasket(item, basket);

            },
            getItemsCount:() => {
                return basket.length;

            },
            getTotalPrice: () => {
                const totalPrice = basket
                    .map(item => item.count * item.product.price)
                    .reduce((a, b) => a + b, 0);
                return totalPrice;
            },
            removeItemById: (id) => {
                basket = basket.filter(item => !item.id != id);
            },
            getBasket: ()  => {
                return basket;
            }
        }
    })();

 updateBasket = (item, basket) => {
    const index = basket.indexOf(item);
    basket[index] = item;
}

const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getBasket().length);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309

