import config from "./config";
import { Coffee } from "./models/CoffeeProduct";
import State, { Banner, BannerState, ProductGroup } from "./models/state";
import Nullable from "./types/nullable";

export const getAllProductsGroups = (state : State) : ProductGroup[] => state.products

export const getLoadedAllProducts = (state : State) : boolean => state.loadedAllProducts 

export const getAllItems = (state : State) : Coffee<string>[] => {
    if (state.products.length === 0) return []
    if (state.products.length === 1) return state.products[0].products
    return state.products.reduce((acc, val, index) => {
        if (index === 0) return acc
        return [...acc, ...val.products]
    }, state.products[0].products)
}

export const getItemsByGroupId = (state : State, id : number) : Coffee<string>[] | Nullable => {
    const result = state.products.find((i) => i.groupId === id)
    if (!!result) return result.products
    else return null
}

export const getNavLinks = () => config.nav

export const getActiveCardUrl = (state : State) => state.activeCardUrl

export const getAgitationBanner = (state : State) : BannerState => state.agitationBanner

export const getRandomCoffee = (state : State) : Coffee<string> | null => state.randomCoffee