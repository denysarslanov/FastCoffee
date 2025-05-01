import * as React from "react"
import c from './Flavors.module.css'
import { CoffeeFlavors, Flavor as FlavorModel } from "../../../core/models/flavor"

export const Flavor : React.FC<FlavorModel> = ({text}) => {
    return <li className={c.flavor}>
        <button className={c.flavor__button}>{text}</button>
    </li>
}

const Flavors : React.FC<FlavorsProps> = ({flavors}) => {
    return <div className={c.flavors}>
        <h3 className={c.flavors__title}>Додатки</h3>
        <ul className={c.flavors__list}>
            {flavors.map((i, index) => <Flavor {...i} key={index} /> )}
        </ul>
    </div>
}

interface FlavorsProps {
    flavors: CoffeeFlavors
}

export default Flavors