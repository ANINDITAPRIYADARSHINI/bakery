type Id = `u${number}` | `p${number}`

export interface User {
    id: Id ;
    name: string;
    email: string;
    password: string;  // In real apps, passwords should be hashed
    address: string;
    phone: string;
}

export interface Products {
    id: Id ;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
  }