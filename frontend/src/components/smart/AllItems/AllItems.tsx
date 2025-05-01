import * as React from "react"
import c from './AllItems.module.css'
import ProductCard from "../ProductCard/ProductCard"
import { AllItemsProps } from "../../../containers/AllItemsContainer"

const AllItems : React.FC<AllItemsProps> = ({items}) => {
    return <>
        <section className={c.allItemsWrapper}>
            {items.map((i, index) => <ProductCard {...i} />)}
        </section>
    </>
}

export default AllItems