import * as React from "react"
import BlockTitle from "../../simple/Navbar/BlockTitle/BlockTitle"
import c from './ProductsBlock.module.css'
import ProductsContainer from "../../../containers/ProductsContainer"

const ProductsBlock: React.FC<ProductsBlockProps> = (props: ProductsBlockProps) => {
    return <div className={c.products}>
        <div className={c.titleContainer}>
            <BlockTitle title="Наша кава" text="Список нашої кави" />
        </div>
    </div>
}

export interface ProductsBlockProps {

}

export default ProductsBlock