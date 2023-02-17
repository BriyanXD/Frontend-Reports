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

    /* const comprobrationState = ():Product[] => {
        if(productState.productsForSearch && productState.productsForSearch.length > 0) return productState.productsForSearch
        return productState.products
    } */

    const searchProducts = (word: string) => {
        getAllProducts().then(response =>{
            const productSeached = SearchForKeywords(response,word)
            dispatch({type:"SEARCH_PRODUCTS", payload: orderByName(productSeached)})
        })
    }

    const deleteProduct = (id: number) => {
        console.log(id)
        deleteProductById(id)
        .then(response =>{
            if(response === 1){
                const result = filterProductDeleted(id, productState.products)
                dispatch({type:"DELETE", payload: result})
            }
        })
    }

    const filterProducts = (category: string) => {
        getAllProducts().then(response => {
            const productsFiltreded = filterProductByCategory(category, response)
            dispatch({type:"FILTER_BY_CATEGORY", payload: orderByName(productsFiltreded)})
        })
    }

    const setProductToUpdated = (product:Product) => {
        dispatch({type:"UPDATE_PRODUCT",payload:product})
    }

    const updateProduct = (product:Product) => {
        updateProductById(product, product.id)
        .then(response => {
            const productsUpdated = replaceProduct(response, productState.products)
            dispatch({type:"GET_ALL_PRODUCTS", payload:productsUpdated})
        })
    }

    const getProducts = () =>{
    dispatch({type:"LOADING", payload:true})
    getAllProducts()
    .then(response => dispatch({type:'GET_ALL_PRODUCTS', payload: orderByName(response)}))
    .catch(() => dispatch({type:"ERROR", payload:true})) }


    const getOneProductById = (productId:number) => {
        getOneProduct(productId)
        .then(response => {
            const productsUpdated = replaceProduct(response, productState.products)
            dispatch({type:"GET_ALL_PRODUCTS", payload: productsUpdated})
        })
    }

    const newProduct = (product:NProduct) => postNewProduct(product)
    .then(response =>{
        if(response.name === 'ERROR_POST_PRODUCTS')dispatch({type:"ERROR_CREATED", payload:"ERROR_CREATED"})
        else dispatch({type:"POST_NEW_PRODUCT", payload:response})})

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