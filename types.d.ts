export interface Product{
    id: number;
    name: string;
    quantity: number;
    price: number;
    condition: string;
    category: string;
    unit: string;
}

export type NProduct = Omit<Product, 'id'>


export interface ProductState {
    productCount:number;
    products:Product[];
    productForUpdate: Product | null
    newProductCreated:Product | null | string
    loading:boolean;
    error:boolean;
    errorCreated:boolean;
    deleted:0
}