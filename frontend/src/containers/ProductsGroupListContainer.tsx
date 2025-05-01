import * as React from "react"
import ProductsList from "../components/ordinary/ProductsList/ProductsList"
import { connect } from "react-redux"
import State, { ProductGroup } from "../core/models/state"
import { getAllProductsGroups } from "../core/selectors"
import ProductsGroupsList from "../components/simple/Navbar/ProductsGroupsList/ProductsGroupsList"

const ProductsGroupListContainer: React.FC<ProductsGroupListContainerProps> = ({products}) => {
    return <ProductsGroupsList products={products} />
}

export interface ProductsGroupListContainerProps {
    products: Array<ProductGroup>
}

const mapStateToProps = (state : State) => ({
    products: getAllProductsGroups(state)
})

export default connect(mapStateToProps, null)(ProductsGroupListContainer)