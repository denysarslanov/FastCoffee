import * as React from "react"
import c from './ProductCard.module.css'
import { Coffee } from "../../../core/models/CoffeeProduct"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setActiveCard } from "../../../core/store/actions/rootActions"
import CustomizationCard from "../CustomizationCard/CustomizationCard"
import Flavors from "../../simple/Flavors/Flavors"
import { CoffeeFlavors } from "../../../core/models/flavor"
import { getNavLinks } from "../../../core/selectors"

const { useEffect } = React

const ProductCard: React.FC<ProductCardProps> = ({ text, name, price, imgLink, url, forPage, additionalInfo, groupId, defaultPrice, flavors }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setActiveCard(url))

        return () => {
            dispatch(setActiveCard(null))
        }
    }, [url])

    let cardForPage = !!forPage ? forPage : false

    return <div className={!!cardForPage ? c.cardPageWrapper : c.defaultCardWrapper}>
        <div className={c.card} style={cardForPage === true ? { flexFlow: 'row wrap' } : {}}>
            {cardForPage === true ? <></> : <h4 className={c.card__title}>{name}</h4>}
            <div className={c.card__content}>
                <img className={c.card__img} src={imgLink} alt='Just Coffee' />
                <div className={c.card__textContainer}>
                    {!!cardForPage ? <></> : <p className={c.card__price}>Price : <span className={c.priceNumber}>{price}</span></p>}
                    {!!cardForPage ? <></> : <p className={c.card__mainText}>{text}</p>}
                </div>
            </div>
            {!cardForPage ? <div className={c.cardLinkWrapper}>
                <NavLink to={`${getNavLinks().item}/${url}`}></NavLink>
            </div> : <></>}
            {!!cardForPage ? <div className={c.card__customization}>
                <CustomizationCard defaultPrice={defaultPrice} />
                <p className={c.card__mainText}>{text}</p>
                <div className={c.card__additionalInfo}>
                    <p className={c.card__text}>{additionalInfo}</p>
                </div>
            </div> : <></>}
        </div>
    </div>
}

interface ProductCardProps extends Coffee<string> {
    forPage?: boolean
}

//  {!!flavors ? <Flavors flavors={flavors as CoffeeFlavors} /> : <p>Немає додатків</p>}

export default ProductCard