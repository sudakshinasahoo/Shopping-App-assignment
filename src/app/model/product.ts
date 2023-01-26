 export class Product{
    category: string;
    description:string;
    id:number;
    image: string;
    pricestring: string;
    rating:Rating;
    title: string;
    quantity: string;
    price: number;
 }

 export class Rating {
     rate: number;
     count: number;
 }