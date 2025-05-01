import * as React from "react"
import CustomizationModel, { SizesModel } from './../models/cutomizationModel';
import customizationService from "../services/customizationService";
import Nullable from './../types/nullable';
import { handleGetCustomization } from './../api';
import { customizationServerToState } from "../utils/fromServerModelToState";

const {useReducer} = React

interface InitialState {
    sizes : SizesModel | Nullable,
    flavors : Nullable,
    url: string
}

const changeSizes = (sizes : SizesModel) => ({type: 'changesizes' as const, sizes})
const changeFlavors = (flavors : object) => ({type: 'changeflavors' as const, flavors})

type Action = ReturnType<typeof changeSizes | typeof changeFlavors> 

export interface UseCustomizationResult extends CustomizationModel {
    handleCustomization: (url? : string) => Promise<SizesModel | Nullable>
}

const useCustomization = (url : string) : UseCustomizationResult => {
    const initalState : InitialState = {
        sizes : null,
        flavors: null,
        url
    }

    const reducer = (state : InitialState, action : Action) : InitialState => {
        switch (action.type) {
            case 'changesizes': 
                return {
                    ...state,
                    sizes: action.sizes
                }
            case 'changeflavors':
                return {
                    ...state,
                    flavors: null
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initalState)

    const fetchCustomization = async (url : string) => {
        const data = await customizationService.getCustomizationForCoffee(url)
        if (!!data && !!Array.isArray(data) && data.length > 0) {
            const customization = customizationServerToState(data)
            dispatch(changeSizes(customization.sizes as SizesModel))
            return customization.sizes
        } 
    }

    return {
        sizes: state.sizes,
        handleCustomization: fetchCustomization
    }
}

export default useCustomization