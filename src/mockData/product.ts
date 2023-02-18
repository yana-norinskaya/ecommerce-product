import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";

export const products: IProducts[] = [
    {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        currentPrice: 125.00,
        oldPrice: 250.00,
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everything the weather can offer",
        src: [product1, product2, product3, product4]
    },
]

export interface IProducts {
    id: number,
    name: string,
    currentPrice: number,
    oldPrice: number,
    description: string,
    src: string[],
}