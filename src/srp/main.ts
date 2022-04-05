import { Messenger } from "./messenger";
import { Order } from "./order";
import { Persistence } from "./persistence";
import { Product } from "./product";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
const messenger = new Messenger();
const persistence = new Persistence();
const order1 = new Order(shoppingCart, messenger, persistence);

shoppingCart.addItem(new Product("T-shirt", 49.99));
shoppingCart.addItem(new Product("Notebook", 4.99));
shoppingCart.addItem(new Product("Eraser", 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order1.orderStatus);
order1.checkout();
console.log(order1.orderStatus);
