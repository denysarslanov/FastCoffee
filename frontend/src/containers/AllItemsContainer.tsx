import * as React from "react"
import { connect, shallowEqual } from "react-redux"
import State from "../core/models/state"
import AllItems from "../components/smart/AllItems/AllItems"
import { getAllItems, getItemsByGroupId } from "../core/selectors"
import { Coffee } from "../core/models/CoffeeProduct"
import BlockTitle from "../components/simple/Navbar/BlockTitle/BlockTitle"

const AllItemsContainer : React.FC<AllItemsProps> = ({items}) => {
    return <>
        {!!items ? <AllItems items={items} /> : <BlockTitle title="404" text="Сторінку не знайдено"/>}
    </>
}

export interface AllItemsProps {
    items : Coffee<string>[]
}

export interface AllItemsContainerProps {
    groupId?: number
}

const mapStateToProps = (state : State, ownProps : AllItemsContainerProps) => {
    let allItems : number | boolean = false

    if (!ownProps || shallowEqual(ownProps, {})) allItems = false
    else allItems = 'groupId' in ownProps ? ownProps.groupId as number : false

    console.log(getAllItems(state), false)
    return {
        items: allItems === false ? getAllItems(state) : getItemsByGroupId(state, allItems)
    }
}

export default connect(mapStateToProps, null)(AllItemsContainer)