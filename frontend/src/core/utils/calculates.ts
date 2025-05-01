import { Coffee } from "../models/CoffeeProduct";
import americano from '../../assets/images/americano.jpg'
import defaultCoffee from '../../assets/images/62037-min.jpg'
import black_tea from '../../assets/images/black-tea.jpg'
import cacao from '../../assets/images/cacao.jpg'
import cappuccino from '../../assets/images/cappuccino.jpg'
import carame_lLatte from '../../assets/images/caramel-latte.jpg'
import flat_white from '../../assets/images/flat-white.jpg'
import fruit_smoothie from '../../assets/images/fruit-smoothie.jpg'
import fruit_tea from '../../assets/images/fruit-tea.jpg'
import ginger_tea from '../../assets/images/ginger-tea.jpg'
import hot_chocolate from '../../assets/images/hot-chocolate.jpg'
import ice_latte from '../../assets/images/ice-latte.jpg'
import latte from '../../assets/images/latte.jpg'
import tea_matcha from '../../assets/images/tea-matcha.jpg'
import espresso from '../../assets/images/espresso.jpg'
import double_espresso from '../../assets/images/double-espresso.jpg'
import mokachino from '../../assets/images/Mokachino.jpg'
import caramel_latte from '../../assets/images/caramel-latte.jpg'
import green_tea from '../../assets/images/green-tea.jpg'
import hot_tea from '../../assets/images/hot-tea.jpg'
import tea_latte from '../../assets/images/tea-latte.jpg'
import milkshake from '../../assets/images/milkshake.jpg'
import smoothie_mango_banana from '../../assets/images/smoothie-mango-banana.jpg'
import smoothie_pineapple_coconut from '../../assets/images/smoothie-pineapple-coconut.jpg'
import green_smoothie from '../../assets/images/green-detox-smoothie.jpg'
import smoothie_avocado_kiwi from '../../assets/images/smoothie-avocado-kiwi.jpg'
import { coffeeGroupsImgLinks } from "../constants";
import { CoffeeNames, CoffeeUrls } from "../types/storeTypes";

export type coffeeIcon = typeof americano 

const coffeeIcons = new Map([
    ['americano', americano],
    ['defaultCoffee', defaultCoffee],
    ['black_tea', black_tea],
    ['cacao', cacao],
    ['cappuccino', cappuccino],
    ['carame_lLatte', carame_lLatte],
    ['flat_white', flat_white],
    ['fruit_smoothie', fruit_smoothie],
    ['fruit_tea', fruit_tea],
    ['ginger_tea', ginger_tea],
    ['green_smoothie', green_smoothie],
    ['hot_chocolate', hot_chocolate],
    ['ice_latte', ice_latte],
    ['latte', latte],
    ['tea_matcha', tea_matcha],
    ['espresso', espresso],
    ['double_espresso', double_espresso],
    ['Mokachino', mokachino],
    ['caramel_latte', caramel_latte],
    ['green_tea', green_tea],
    ['hot_tea', hot_tea],
    ['tea_latte', tea_latte],
    ['milkshake', milkshake],
    ['smoothie_mango_banana', smoothie_mango_banana],
    ['smoothie_pineapple_coconut', smoothie_pineapple_coconut],
    ['green_smoothie', green_smoothie],
    ['smoothie_avocado_kiwi', smoothie_avocado_kiwi]
])


    
const fromServerImgNameToFront = (s : string) : string => s.replace(/-/g, '_')


/*
export const calculateMediumProductsPrice = (products : Coffee<number>[] | null)  => function () {
    if (products === null) return 0
    return products.reduce((acc : number, val : Coffee<number>) : number => acc + val.price, products[0].price)
}*/

interface PriceObj {
    defaultPrice : number
}

export const calculateMediumProductsPrice = <T extends PriceObj>(products : T[]) => function () {
    if (products.length < 1) return 0
    return products.reduce((acc : number, val : T) : number => acc + val.defaultPrice, products[0].defaultPrice)
}

type MinMax = 'min' | 'max'

export const getMinMax = <T extends PriceObj>(products : T[], operator : MinMax) => function () : number {
    if (products.length < 1) return 0
    return products.reduce((acc : number, val : T) : number => {
        if (operator === 'max') {
            if (acc > val.defaultPrice) return acc
            else return val.defaultPrice
        }
        if (operator === 'min') {
            if (acc < val.defaultPrice) return acc
            else return val.defaultPrice
        }
        return 0
    }, products[0].defaultPrice)
}

export const getCoffeeImageLink = (s : string) => {
    const editedName = fromServerImgNameToFront(s)

    console.log({s, editedName})
    let value : string = defaultCoffee

    if (coffeeIcons.has(editedName)) value = coffeeIcons.get(editedName)

    return value
}

export const getCoffeeGroupImgLink = (s : string)  : string => {
    const img = coffeeGroupsImgLinks.get(s)

    if (typeof img === 'string') return img

    return defaultCoffee
}

export const getUrlByName = (name : CoffeeNames) : CoffeeUrls => {
    if (name === "Кава") return 'coffee'
    if (name === "Спеціальні Напої") return 'specialDrinks'
    if (name === "Смузі") return 'smoothie'
    if (name === "Чай") return 'tea'
    return false as never
}

export const getCoffeeGroupNameByUrl = (url : CoffeeUrls) : CoffeeNames => {
    if (url === "coffee") return 'Кава'
    if (url === "specialDrinks") return 'Спеціальні Напої'
    if (url === "smoothie") return 'Смузі'
    if (url === "tea") return 'Чай'
    return url
}

export const getNumberFromSize = (size : string) : number | null => Number(size.split('ml')[0])