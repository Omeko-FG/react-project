export type EventFunc = (e:React.ChangeEvent<HTMLInputElement>) =>void;

export interface Products{
    products: Products[];
    total : number;
    skip: number;
    limit: number;
    }

    export interface Product {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
      }
    
    