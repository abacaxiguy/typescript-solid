type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = "open";

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("your cart is empty.");
            return;
        }

        this._orderStatus = "closed";
        this.sendMessage(
            `your order with a total of ${this.total()} was received.`,
        );
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log("Message sent: ", msg);
    }

    saveOrder(): void {
        console.log("Order saved successfully...");
    }

    clear(): void {
        console.log("shopping cart was cleaned...");
        this._items.length = 0;
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: "T-shirt", price: 49.99 });
shoppingCartLegacy.addItem({ name: "Notebook", price: 4.99 });
shoppingCartLegacy.addItem({ name: "Eraser", price: 1.99 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus);
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
