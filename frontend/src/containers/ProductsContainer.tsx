import * as React from "react"
import ProductsBlock from "../components/ordinary/ProductsBlock/ProductsBlock"
import ProductsListContainer from "./ProductsGroupListContainer"

const ProductsContainer : React.FC<ProductsContainerProps> = (props : ProductsContainerProps) => {
    return <>
        <ProductsBlock />
        <ProductsListContainer />
    </>
}   

export interface ProductsContainerProps {

}

export default ProductsContainer