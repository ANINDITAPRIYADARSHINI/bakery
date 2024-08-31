import {User, Products} from "@/app/lib/definitions";


const users: User[] = [
    {
        id: "u1",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        address: "456 Elm Street, Othertown, USA",
        phone: "+1-234-567-8910",
      },
];


const products: Products[] = [
    {
        id: "p1",
        name: "Wireless Bluetooth Headphones",
        description: "High-quality over-ear wireless headphones with noise-canceling feature.",
        price: 99.99,
        category: "Electronics",
        imageUrl: "https://via.placeholder.com/150?text=Headphones",
        inStock: true,
      },
      {
        id: "p2",
        name: "Smart Fitness Watch",
        description: "Track your daily activities, heart rate, and sleep patterns with this smart fitness watch.",
        price: 149.99,
        category: "Wearables",
        imageUrl: "https://via.placeholder.com/150?text=Fitness+Watch",
        inStock: true,
      },
      {
        id: "p3",
        name: "4K Ultra HD Smart TV",
        description: "Enjoy stunning visuals with this 55-inch 4K Ultra HD Smart TV with built-in streaming apps.",
        price: 599.99,
        category: "Home Appliances",
        imageUrl: "https://via.placeholder.com/150?text=Smart+TV",
        inStock: false,
      },
      {
        id: "p4",
        name: "Gaming Laptop",
        description: "High-performance gaming laptop with a powerful graphics card and fast processor.",
        price: 1299.99,
        category: "Computers",
        imageUrl: "https://via.placeholder.com/150?text=Gaming+Laptop",
        inStock: true,
      },
];

export {users, products};
