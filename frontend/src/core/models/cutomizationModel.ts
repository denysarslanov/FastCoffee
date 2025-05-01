import Nullable from "../types/nullable"

export interface Size {
    size : string,
    price : number
}

interface CustomizationModel {
    sizes: SizesModel | Nullable,
    flavors?: object | null
}

export interface SizesModel {
    s? : Size,
    m : Size,
    l? : Size,
    xl?: Size
}


export interface CustomizationModelServer {
    coffee_actual_size: string,
    coffee_id: number,
    coffee_price: number,
    size: Sizes,
    size_id: number
}

export type Sizes = 'm' | 'l' | 'xl' | 's'

export default CustomizationModel