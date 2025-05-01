import { ThunkAction } from "redux-thunk"
import { SET_ACTIVE_CARD } from "../../constants"
import { Coffee } from "../../models/CoffeeProduct"
import State, { CoffeeServer, ProductGroup } from "../../models/state"
import { DefaultAction, NullProductsGroups, SetActiveCard, SetCoffeeGroups, SetCoffeeProductToGroup, SetIsAllProductsLoaded, SetRandomCoffee } from "../../types/actions"
import Nullable from "../../types/nullable"
import { Action, UnknownAction } from "redux"
import coffeeService from "../../services/coffeeService"
import { coffeeServerToState } from "../../utils/fromServerModelToState"

export const setActiveCard : SetActiveCard = (url) => ({
    type: 'SET_ACTIVE_CARD',
    payload: url
})

export const setCoffeeGroups : SetCoffeeGroups = (coffeeGroups : ProductGroup[] ) => ({
    type: "SET_COFFEE_GROUPS",
    payload: coffeeGroups
})

export const setCoffeeProductToGroup : SetCoffeeProductToGroup = (coffee) => ({
    type: 'SET_COFFEE_PRODUCTS_TO_GROUP',
    payload: coffee
})

export const setIsAllProductsLoaded : SetIsAllProductsLoaded = (value) => ({
    type: 'SET_ALL_PRODUCTS_LOADED',
    payload: value
})

export const setRandomCoffee : SetRandomCoffee = (coffee) => ({
    type: 'SET_RANDOM_CARD',
    payload: coffee
})

export const nullProductsGroups : NullProductsGroups = () => ({
    type: 'NULL_PRODUCTS_GROUPS'
})

export const setCoffeeThunk = (groupName? : string, callBack? : Function) : ThunkAction<void, State, unknown, Action> => async (dispatch, getState) => {

    let result : false | CoffeeServer[]

    switch (!groupName) {
        case true: {
            result = await coffeeService.getAllCoffee()
            dispatch(setIsAllProductsLoaded(true))
            break
        }
        case false: result = await coffeeService.getCoffeeByGroupName(groupName as string); break
    }
    
    if (!result) return false

    dispatch(nullProductsGroups())
    const helper = coffeeServerToState(result)
    console.log({helper})
    coffeeServerToState(result).map(i => dispatch(setCoffeeProductToGroup(i)))

    if (!!callBack) callBack()
} 

export const setRandomCoffeeThunk = () : ThunkAction<void, State, unknown, Action> => async (dispatch, getState) => {
    try {
        let response : false | [CoffeeServer] | CoffeeServer[]

        response = await coffeeService.getRandomCoffee()
    
        if (!response) return false
    
        dispatch(setRandomCoffee(coffeeServerToState(response)[0]))
    }
    catch (e) {
        console.log({e}, 'In root actions -> setRandomCoffeeThunk')
    }
}   