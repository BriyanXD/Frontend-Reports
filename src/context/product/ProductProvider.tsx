import { useReducer } from "react";
import { NProduct, Product, ProductState } from "../../../types";
import { ProductContext } from "./ProductContext";
import { ProductReducer } from "./ProductReducer";
import { getAllProducts, getOneProduct } from "../../services/product/getProduct";
import postNewProduct from "../../services/product/postProduct";
import SearchForKeywords from "../../services/product/searchForKeywords";
import deleteProductById from "../../services/product/deleteProduct";
import { filterProductDeleted } from "../../services/product/filterProductDeleted";
import updateProductById from "../../services/product/updateProduct";
import replaceProduct from "../../services/product/replaceProduct";
import orderByName from "../../services/product/orderByname";
import filterProductByCategory from "../../services/product/filterProductByCategory";


const INITIAL_STATE:ProductState = {
    productCount:0,
    products:[],
    productForUpdate:null,
    newProductCreated:null,
    loading:false,
    error:false,
    errorCreated:false,
    deleted:0
}



interface TypeProps {
    children: JSX.Element | JSX.Element[];
}

export const ProductProvider = ({ children }:TypeProps) => {
    
    const [productState, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

    const searchProducts = (word: string) => {
        getAllProducts()
        .then(response => response.json())
        .then(response =>{
            const productSeached = SearchForKeywords(response,word)
            dispatch({type:"SEARCH_PRODUCTS", payload: orderByName(productSeached)})
        })
    }

    const deleteProduct = (id: number) => {
        deleteProductById(id)
        .then(response =>{
            if(response === 1){
                const result = filterProductDeleted(id, productState.products)
                dispatch({type:"DELETE", payload: result})
            }
        })
    }

    const filterProducts = (category: string) => {
        getAllProducts()
        .then(response => response.json())
        .then(response => {
            const productsFiltreded = filterProductByCategory(category, response)
            dispatch({type:"FILTER_BY_CATEGORY", payload: orderByName(productsFiltreded)})
        })
    }

    const setProductToUpdated = (product:Product) => {
        dispatch({type:"UPDATE_PRODUCT",payload:product})
    }

    const updateProduct = async(product:Product) => {
        let responseReturn = {}
        await updateProductById(product, String(product.id))
        .then(response => {
            responseReturn = response;
            return response.json()
        })
        .then(response => {
            const productsUpdated = replaceProduct(response, productState.products)
            dispatch({type:"GET_ALL_PRODUCTS", payload:productsUpdated})
        })
        .catch(error => console.log(error))
        return responseReturn
    }

    const getProducts = async() =>{
        let responseReturn = {} as Response;
        dispatch({type:"LOADING", payload:true})
        await getAllProducts()
        .then(response => {
            responseReturn = response
            return response.json() as Promise<Product[]>
        })
        .then(response => dispatch({type:'GET_ALL_PRODUCTS', payload: orderByName(response)}))
        .catch(() => {
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ERROR", payload:true})
        })
    }
    

    const getOneProductById = (productId:number) => {
        getOneProduct(productId)
        .then(response => {
            const productsUpdated = replaceProduct(response, productState.products)
            console.log(productsUpdated);
            dispatch({type:"GET_ALL_PRODUCTS", payload: productsUpdated})
        })
    }

    const newProduct = async (product:NProduct) => {
        let responseReturn = {} as Response;
        await postNewProduct(product)
        .then(response =>{
            responseReturn = response;
            return response.json()
        })
        .then(response =>{
            if(response.error) return
            dispatch({type:"POST_NEW_PRODUCT", payload:response})
        })
        return responseReturn
    }

    return(
        <ProductContext.Provider value={{
            productState,
            getProducts,
            newProduct,
            searchProducts,
            setProductToUpdated,
            updateProduct,
            dispatch,
            deleteProduct,
            filterProducts,
            getOneProductById
        }}>
            {children}
        </ProductContext.Provider>
    )
}