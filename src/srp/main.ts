import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "T-shirt", price: 49.99 });
shoppingCart.addItem({ name: "Notebook", price: 4.99 });
shoppingCart.addItem({ name: "Eraser", price: 1.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

shoppingCart.clear();

console.log(shoppingCart.total());

shoppingCart.addItem({ name: "Notebook", price: 4.99 });

shoppingCart.checkout();
shoppingCart.orderStatus;
