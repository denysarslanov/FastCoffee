import { CoffeeServer, ProductGroup, ProductGroupServer } from "../models/state";
import americano from '../../assets/images/americano.jpg'
import { CoffeeFlavors } from "../models/flavor";
import Nullable from "../types/nullable";
import { Coffee } from "../models/CoffeeProduct";
import CustomizationModel, { CustomizationModelServer, SizesModel } from "../models/cutomizationModel";
import { getCoffeeGroupImgLink, getCoffeeImageLink, getUrlByName } from "./calculates";
import { CoffeeNames } from "../types/storeTypes";

const coffeeGroupToState = (data : ProductGroupServer[]) : ProductGroup[] => {
    let products : ProductGroup[] = []

    data.map((i, index) => {
        const {defaultPrice, group_id, name, price, text} = i
        console.log({i})
        const imgLink = getCoffeeGroupImgLink(i.name)
    
        let obj : ProductGroup = {
            defaultPrice,
            groupId: group_id,
            name,
            price,
            text,
            products: [],
            imgLink,
            url: getUrlByName(name as CoffeeNames)
        }

        products.push(obj)
    })
    
    return products
}

export const coffeeServerToState = (cofeeServer : CoffeeServer[]) : Coffee<string>[] => {
    let result : Coffee<string>[] = []

    cofeeServer.map(item => {

        const imageLink = getCoffeeImageLink(item.coffee_url)

        let obj : Coffee<string> = {
            name: item.coffee_name,
            text: item.coffee_text,
            price: item.coffee_price_string,
            imgLink: imageLink,
            url: item.coffee_url,
            defaultPrice: item.coffee_default_price,
            parentGroupId: item.group_id
        }

        if (!!item.coffee_additional_info) obj.additionalInfo = item.coffee_additional_info

        result.push(obj)
    })

    return result
}

export const customizationServerToState = (customizationServerArr : CustomizationModelServer[]) : CustomizationModel => {
    let result : CustomizationModel = {
        sizes: undefined,
        flavors: null
    }

    let sizes : SizesModel = {m: {price: 10, size: '100'}}

    customizationServerArr.map(customization => {
        sizes[customization.size] = {price: customization.coffee_price, size: customization.coffee_actual_size}
    })

    result.sizes = sizes

    console.log(result.sizes, 'SIZES')

    return result as CustomizationModel
}

export default coffeeGroupToState