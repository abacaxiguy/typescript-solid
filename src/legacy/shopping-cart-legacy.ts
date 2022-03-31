type CartItem = { name: string; price: number };

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private orderStatus: "open" | "closed" = "open";

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

        this.orderStatus = "closed";
        this.sendMessage("your order was received.");
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
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: "T-shirt", price: 49.99 });
shoppingCartLegacy.addItem({ name: "Notebook", price: 4.99 });
shoppingCartLegacy.addItem({ name: "Eraser", price: 1.99 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());

shoppingCartLegacy.clear();

console.log(shoppingCartLegacy.total());

shoppingCartLegacy.addItem({ name: "Notebook", price: 4.99 });

shoppingCartLegacy.checkout();
