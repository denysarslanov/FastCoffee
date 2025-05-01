import { AxiosResponse } from "axios"
import { handleGetAllCoffee, handleGetCoffeeByGroupName, handleGetCoffeeByUrl, handleGetRandomCoffee } from "../api"
import { Coffee } from "../models/CoffeeProduct"
import Nullable from "../types/nullable"
import { CoffeeServer, ProductGroup, ProductGroupServer } from "../models/state"
import { getCoffeeGroupNameByUrl } from "../utils/calculates"
import { CoffeeUrls } from "../types/storeTypes"

export const baseResponseCheck = (response : AxiosResponse<any> | Awaited<any>) => {
    if (!response || (response.status > 299 && response.status < 200) || !Array.isArray(response.data) || response.data.length < 1) return false
    return true
}

type CoffeeSeriveMethod<T, A> = (...args : A[]) => Promise<T | false>

class ServiceHandler<T, A> {
    handler: () => Promise<AxiosResponse<T> | false>
    constructor (handler : () => Promise<AxiosResponse<T> | false>) {
        this.handler = handler
    }

    handle = async () => {
        const response = await this.handler() 
        if (!baseResponseCheck(response)) return false
        let res = response as AxiosResponse<T>
        return res.data
    }
}

class CoffeeService {
    coffeeService = true

    // METHODS HERE WONT ONLY GET DATA, THEY WILL ALSO SET IT INTO THE GLOBAL STATE
    getAllCoffee : CoffeeSeriveMethod<CoffeeServer[], never> = async () => {
        const response = await handleGetAllCoffee({isGroups: false}) as AxiosResponse<CoffeeServer[]> 
        if (!baseResponseCheck(response)) return false

        return response.data
    }

    getAllCoffeeGroups : CoffeeSeriveMethod<ProductGroupServer[], never> = async () => {
        const response = await handleGetAllCoffee({isGroups: true}) as AxiosResponse<ProductGroupServer[]>


        if (!baseResponseCheck(response)) return false

        return response.data
    }

    getCoffeeByGroupName = async (groupName : string | number) : Promise<CoffeeServer[] | false> => new ServiceHandler<CoffeeServer[], string | number>(() => handleGetCoffeeByGroupName({groupName: getCoffeeGroupNameByUrl(groupName as CoffeeUrls)})).handle()
    getRandomCoffee = async () : Promise<false | [CoffeeServer]> => new ServiceHandler<[CoffeeServer], never>(() => handleGetRandomCoffee()).handle()
    getCoffeeByUrl = async (url : string) : Promise<false | [CoffeeServer]> => new ServiceHandler<[CoffeeServer], string>(() => handleGetCoffeeByUrl(url)).handle()
}

export default new CoffeeService()