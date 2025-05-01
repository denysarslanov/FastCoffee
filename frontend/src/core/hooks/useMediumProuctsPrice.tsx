import * as React from "react"
import { Coffee } from "../models/CoffeeProduct"
import { calculateMediumProductsPrice } from "../utils/calculates"

const {useState, useEffect} = React

const useMediumProductsPrice = <T extends {defaultPrice : number}>(products : T[]) : [number] => {
    const [mediumPrice, setMediumPrice] = useState(calculateMediumProductsPrice<T>(products as T[]))

    useEffect(() => {
        setMediumPrice(calculateMediumProductsPrice<T>(products as T[]))
    }, [products])

    return [mediumPrice]
}


/*
const useMediumProductsPrice = ( products : Coffee<number>[] | null ) : [number] => {
    const [mediumPrice, setMediumPrice] = useState(calculateMediumProductsPrice(products))

    useEffect(() => {
        setMediumPrice(calculateMediumProductsPrice(products))
    }, [products])

    return [mediumPrice]
}*/

export default useMediumProductsPrice