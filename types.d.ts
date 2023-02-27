export interface Product{
    id: string;
    name: string;
    quantity: number;
    price: number;
    condition: string;
    category: string;
    unit: string;
}

export interface ProductError{
    id: string;
    name: string;
    quantity: string;
    price: string;
    condition: string;
    category: string;
    unit: string;
}

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

export interface NProduct{
    name: string;
    quantity: string;
    price: string;
    condition: string;
    category: string;
    unit: string;
}

export interface Sale{
    id: string;
    quantity: number;
    total: number;
    createdAt: Date;
    creationTime: Date;
    productId: string;
    product?:{
        name:string;
        price:number;
        category:string;
        quantity:number;
    }
}

export interface SaleError{
    id: string;
    quantity: string;
    total: string;
    createdAt: string;
    creationTime: string;
    productId: string;
}


export type NSale = {
    quantity:string;
    entri:string;
}

export interface SaleState {
    sales: Sale[],
    newSaleCreated: Sale | null;
    product:Product | null;
    saleUpdated: Sale |  null;
    saleSaved: Sale | null;
}