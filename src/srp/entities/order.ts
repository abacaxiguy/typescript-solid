import { OrderStatus } from "./interfaces/order-status";
import { Messenger } from "../services/messenger";
import { Persistence } from "../services/persistence";
import { ShoppingCart } from "./shopping-cart";

export class Order {
    private _orderStatus: OrderStatus = "open";

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messenger: Messenger,
        private readonly persistence: Persistence,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("your cart is empty.");
            return;
        }

        this._orderStatus = "closed";
        this.messenger.sendMessage(
            `your order with a total of ${this.cart.total()} was received.`,
        );
        this.persistence.saveOrder();
        this.cart.clear();
    }
}
