export interface Product{
    id: number;
    name: string;
    quantity: number;
    price: number;
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

export type NProduct = Omit<Product, 'id'>

export interface Sale{
    id: number;
    quantity: number;
    total: number;
    createdAt: Date;
    creationTime: Date;
    productId: number;
    product?:{
        name:string;
        price:number;
        category:string;
    }
}
export type NSale = {
    productId:number;
    quantity:number;
}

export interface SaleState {
    sales: Sale[],
    newSaleCreated: Sale | null;
    product:Product | null;
    saleUpdated: Sale |  null;
    saleSaved: Sale | null;
}