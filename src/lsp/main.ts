import { Messenger } from "./services/messenger";
import { Order } from "./classes/order";
import { Persistence } from "./services/persistence";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messenger = new Messenger();
const persistence = new Persistence();
const order1 = new Order(shoppingCart, messenger, persistence);

shoppingCart.addItem(new Product("T-shirt", 49.99));
shoppingCart.addItem(new Product("Notebook", 4.99));
shoppingCart.addItem(new Product("Eraser", 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order1.orderStatus);
order1.checkout();
console.log(order1.orderStatus);
