import * as React from "react"
import Nullable from "../types/nullable";
import { Coffee } from "./CoffeeProduct";
import { AgitationalBannerItem } from "../../components/ui/List";

export interface ProductGroup {
    name : string,
    products : Coffee<string>[] | [],
    text : string,
    imgLink: string,
    price: string,
    groupId  : number,
    url: string,
    defaultPrice: number
}

export interface ProductGroupServer {
    group_id : number,
    name: string,
    text: string,
    price: string,
    defaultPrice: number
}

export interface CoffeeServer {
    coffee_id : number,
    coffee_url : string,
    coffee_text: string,
    coffee_default_price: number,
    coffee_additional_info: string | Nullable,
    group_id: number,
    coffee_name: string,
    coffee_price_string: string
}

export interface Banner {
    imgUrl: string,
    title: string,
    text: string | React.ReactNode
}

export interface BannerState extends Banner {
    content: AgitationalBannerItem[]
}

interface State {
    products: ProductGroup[],
    activeCardUrl : string | Nullable,
    agitationBanner : BannerState,
    loadedAllProducts: boolean,
    randomCoffee: Coffee<string> | null
}

export default State