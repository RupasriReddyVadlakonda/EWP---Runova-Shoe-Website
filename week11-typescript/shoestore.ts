// Week 11 - TypeScript: classes, interfaces and functions

interface IShoe {
  id: string;
  name: string;
  brand: string;
  category: string;
  size: number;
  color: string;
  price: number;
  stock?: number;
}

class Shoe implements IShoe {
  constructor(
    public id: string,
    public name: string,
    public brand: string,
    public category: string,
    public size: number,
    public color: string,
    public price: number,
    public stock: number = 10
  ) {}

  describe(): string {
    return `${this.brand} ${this.name} (${this.color}, size ${this.size}) - Rs.${this.price}`;
  }

  inStock(): boolean {
    return this.stock > 0;
  }
}

class SportsShoe extends Shoe {
  constructor(id: string, name: string, brand: string, size: number,
              color: string, price: number, public sport: string) {
    super(id, name, brand, "Sports", size, color, price);
  }
  describe(): string {
    return super.describe() + ` [Sport: ${this.sport}]`;
  }
}

class Cart {
  private items: IShoe[] = [];
  add(shoe: IShoe): void { this.items.push(shoe); }
  get count(): number { return this.items.length; }
  get total(): number { return this.items.reduce((sum, s) => sum + s.price, 0); }
}

function applyDiscount(price: number, percent: number = 10): number {
  return price - (price * percent) / 100;
}

const filterByBrand = (shoes: IShoe[], brand: string): IShoe[] =>
  shoes.filter(s => s.brand.toLowerCase() === brand.toLowerCase());

const s1 = new Shoe("S101", "Air Max 270", "Nike", "Sports", 9, "Black", 8999, 20);
const s2 = new SportsShoe("S102", "Ultraboost 22", "Adidas", 7, "White", 9999, "Running");

const cart = new Cart();
cart.add(s1);
cart.add(s2);

console.log(s1.describe());
console.log(s2.describe());
console.log("In stock:", s1.inStock());
console.log("Items:", cart.count, "Total:", cart.total);
console.log("After 20% off:", applyDiscount(cart.total, 20));
console.log(filterByBrand([s1, s2], "nike"));
