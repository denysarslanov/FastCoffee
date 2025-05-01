import axios, { AxiosResponse } from "axios"
import config from "./config"
import CustomizationModel, { CustomizationModelServer } from "./models/cutomizationModel"
import { Coffee } from "./models/CoffeeProduct"
import Nullable from "./types/nullable"
import { CoffeeServer, ProductGroup, ProductGroupServer } from "./models/state"

const { apiUrl } = config

const instance = axios.create({
    baseURL: config.apiUrl.baseApiUrl,
})

// instance.get(`${config.apiUrl.getCustomization}/${url}`)


export const handleGetCustomizationTest = (url: string): Promise<CustomizationModel> => new Promise((resolve, reject) => {
    resolve({
        sizes: {
            s: { size: '100ml', price: 4000 },
            l: { size: '110ml', price: 5000 },
            m: { size: '120ml', price: 6000 },
            xl: { size: '130ml', price: 7000 }
        },
        flavors: null
    })
})

export const handleGetCustomization = (url : string) : Promise<AxiosResponse<CustomizationModelServer[] | false>> => new Promise((resolve, reject) => {
    try {
        const response = instance.get(`/${apiUrl.getCustomization}${url}`)
        resolve(response)
    }
    catch (e) {
        console.log({e}, 'In api handler -> handleGetCustomization')
        reject(e)
    }
})

export const handleGetAllCoffee = ({ isGroups }: { isGroups: boolean }): Promise<AxiosResponse<ProductGroupServer[] | CoffeeServer[]>> => new Promise((resolve, reject) => {
    let data = undefined

    if (isGroups) data = instance.get(`/${apiUrl.groups}`)
    else data = axios.get(`${apiUrl.baseApiUrl}`)

    resolve(data)
})

export const handleGetCoffeeByGroupName = ({ groupName }: { groupName: string | number }): Promise<AxiosResponse<CoffeeServer[]>> => new Promise((resolve, reject) => {
    try {
        const result = instance.get(`${apiUrl.baseApiUrl}/${apiUrl.groups}/${groupName}`)
        resolve(result)
    }
    catch (e) {
        console.log('In handleGetCoffeeByGroupName', { e })
        reject(e)
    }
})

export const handleGetRandomCoffee = (): Promise<AxiosResponse<[CoffeeServer]>> => new Promise((resolve, reject) => {
    try {
        const result = instance.get(`${apiUrl.randomCoffee}`)
        resolve(result)
    }
    catch (e) {
        console.log({ e }, 'In api handlers -> handleGetRandomCoffee')
    }
})

export const handleGetCoffeeByUrl = (url : string) : Promise<AxiosResponse<[CoffeeServer]>> => new Promise((resolve, reject) => {
    try {
        const response = instance.get(`${apiUrl.coffeeByUrl}${url}`)
        resolve(response)
    }
    catch (e) {
        console.log({e}, 'In api handler -> handleGetCoffeeByUrl')
    }
})