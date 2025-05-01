import * as React from "react"
import c from './ShowAllItemsBlock.module.css'
import LinkBtn from "../../simple/LinkBtn/LinkBtn"
import BlockTitle from "../../simple/Navbar/BlockTitle/BlockTitle"
import { getNavLinks } from "../../../core/selectors"
import { ShowAllItemsBlockData, showAllItemsDefaultValues } from "../../../core/constants"

const ShowAllItemsBlock : React.FC<ShowAllItemsBlockData> = ({title, btnText}) => {
    if (!title) title = showAllItemsDefaultValues.title as string
    if (!btnText) btnText = showAllItemsDefaultValues.btnText as string
    return <section className={c.listAllCoffee}>
        <BlockTitle title={title} />
        <div className={c.btnContainer}>
            <LinkBtn to={getNavLinks().items} text="Показати усю каву" />
        </div>
    </section>
}

export default ShowAllItemsBlock