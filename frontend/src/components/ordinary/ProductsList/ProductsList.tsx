import * as React from "react"
import Nullable from "../../../core/types/nullable"
import { Coffee } from "../../../core/models/CoffeeProduct"

const ProductsList: React.FC<ProductsListProps> = (props : ProductsListProps) => {
    console.log({props})
    return <>

    </>
}

export interface ProductsListProps {
    products: Array<Coffee<Nullable>>
}

export default ProductsList