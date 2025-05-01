import * as React from "react"
import c from './TryToday.module.css'
import BlockTitle from "../../simple/Navbar/BlockTitle/BlockTitle"
import { Coffee } from "../../../core/models/CoffeeProduct"
import ProductCard from "../../smart/ProductCard/ProductCard"
import Preloader from "../../simple/Preloader/Preloader"

const TryToday : React.FC<TryTodayProps> = ({coffee, isLoading, handleUpdateRandomCoffee}) => {
    React.useEffect(() => {
        console.log({isLoading})
    }, [isLoading])
    
    return <section className={c.tryToday}>
        <div className={c.tryToday__titleWrapper}>
            <BlockTitle title="Спробуй сьогодні"/>
        </div>
        <div className={c.cardContainer}>
            {!!isLoading ? <Preloader /> : <ProductCard {...coffee} />}
        </div>
        <div className={c.update}>
            <button className="defaultBtn" onClick={() => {handleUpdateRandomCoffee()}} >Оновити</button>
        </div>
    </section>
}

export interface TryTodayProps {
    coffee: Coffee<string>,
    isLoading: boolean,
    handleUpdateRandomCoffee: Function
}

export default TryToday