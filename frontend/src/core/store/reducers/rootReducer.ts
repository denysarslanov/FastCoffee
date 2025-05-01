import { Action } from "../../types/actions"
import { Coffee } from "../../models/CoffeeProduct"
import State, { ProductGroup } from "../../models/state"
import americano from '../../../assets/images/62037.jpg'
import agitationBannerImage from '../../../assets/images/bg1.jpg'
import initialState from "../initialState"


const rootReducer = (state: State | null = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CARD':
            return {
                ...state,
                activeCardUrl: action.payload
            }
        case "SET_COFFEE_GROUPS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_COFFEE_PRODUCTS_TO_GROUP":
            if (!state) return state
            {   
                const productsCopy = [...state.products]

                let foundGroup = productsCopy.find(i => i.groupId === action.payload.parentGroupId)
                if (!foundGroup) return state

                const index = productsCopy.indexOf(foundGroup)

                // PROBLEMS WITH find (ES ISSUSES)
                //DONT KNOW WHY, BECAUSE FIND IS AN OLD FEATURE
                const asCoffee = (i : never) => i as Coffee<string>

                const found = productsCopy[index].products.find((i, index)=> asCoffee(i as never).name === action.payload.name)
                if (found) return state

                productsCopy[index].products = [...productsCopy[index].products, {...action.payload}]

                return {
                    ...state,
                    products: productsCopy
                }
            }
        case 'NULL_PRODUCTS_GROUPS': 
            if (!state) return state
            return {
                ...state, 
                products: [...state.products.map(i => ({...i, products: []}) )]
            }
        case "SET_ALL_PRODUCTS_LOADED":
            return {
                ...state,
                loadedAllProducts: action.payload
            }
        case 'SET_RANDOM_CARD': 
            return {
                ...state,
                randomCoffee: action.payload
            }
        default: {
            return state
        }
    }
}


export default rootReducer

