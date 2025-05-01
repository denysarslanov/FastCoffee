import { NULL_PRODUCTS_GROUPS, SET_ACTIVE_CARD, SET_ALL_PRODUCTS_LOADED, SET_COFFEE_GROUPS, SET_COFFEE_PRODUCTS_TO_GROUP, SET_RANDOM_CARD } from "../constants"
import { Coffee } from "../models/CoffeeProduct"
import { ProductGroup } from "../models/state"
import Nullable from "./nullable"

export interface DefaultAction<T> {
    type: string,
    payload: T
}

export type SetActiveCard = (url : string | Nullable) => ({
    type: typeof SET_ACTIVE_CARD, 
    payload: typeof url
})

export type SetCoffeeGroups = (coffeeGroups : ProductGroup[] | []) => ({
    type: typeof SET_COFFEE_GROUPS,
    payload: ProductGroup[]
})

export type SetCoffeeProductToGroup = (coffee : Coffee<string>) => ({
    type: typeof SET_COFFEE_PRODUCTS_TO_GROUP,
    payload: Coffee<string>
})

export type SetIsAllProductsLoaded = (value : boolean) => ({
    type: typeof SET_ALL_PRODUCTS_LOADED,
    payload: boolean
})

export type SetRandomCoffee = (coffee : Coffee<string>) => ({
    type: typeof SET_RANDOM_CARD,
    payload: Coffee<string>
})

export type NullProductsGroups = () => ({
    type: typeof NULL_PRODUCTS_GROUPS
})

export type Action = ReturnType<SetActiveCard | SetCoffeeGroups | SetCoffeeProductToGroup | SetIsAllProductsLoaded | SetRandomCoffee | NullProductsGroups>