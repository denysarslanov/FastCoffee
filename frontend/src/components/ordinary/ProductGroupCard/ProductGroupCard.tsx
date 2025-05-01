import * as React from "react"
import c from './ProductGroupCard.module.css'
import { ProductGroup } from "../../../core/models/state"
import useMediumProductsPrice from "../../../core/hooks/useMediumProuctsPrice"
import { Coffee } from "../../../core/models/CoffeeProduct"
import useMinMaxProducts from "../../../core/hooks/useMinMaxProducts"
import { NavLink } from "react-router-dom"
import config from "../../../core/config"

const ProductGroupCard: React.FC<ProductGroup> = ({ text, name, imgLink, products, groupId, url, price}) => {
    const [mediumPrice] = useMediumProductsPrice<Coffee<string>>(products)
    const [min, max] = useMinMaxProducts(price)

    return <div className={c.card}>
        <NavLink to={`/${config.nav.items + url}`} className={c.invisibleLink}></NavLink>
        <div className={c.card__hover}>
            <ul className={c.cardHover__list}>
                <li className={c.cardHover__listItem}>
                    <p>{text}</p>
                </li>
            </ul>
        </div>
        <h4 className={c.card__title}>{name}</h4>
        <div className={c.card__content}>
            <img className={c.card__img} src={imgLink} alt='Just Coffee' />
        </div>
    </div>
}

export default ProductGroupCard