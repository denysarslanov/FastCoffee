import * as React from "react"
import c from './ProductsGroupsList.module.css'
import { ProductGroup } from "../../../../core/models/state"
import ProductGroupCard from "../../../ordinary/ProductGroupCard/ProductGroupCard"

const {useEffect} = React

const ProductsGroupsList : React.FC<ProductsGroupsListProps> = ({products}) => {
    return <div className={c.products}>
        <ul className={c.products__list}>
            {products.map((i : ProductGroup, index) => <li><ProductGroupCard {...i} /></li>)}
        </ul>
    </div>
}

export interface ProductsGroupsListProps {
    products : Array<ProductGroup>
}

export default ProductsGroupsList