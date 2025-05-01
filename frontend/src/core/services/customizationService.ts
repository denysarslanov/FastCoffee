import { handleGetCustomization } from "../api"
import CustomizationModel, { CustomizationModelServer } from "../models/cutomizationModel"

class CustomizationService {
    customizationService: true

    getCustomizationForCoffee = async (url : string) : Promise<CustomizationModelServer[] | false> => {
        // WORKS WITH API HANDLERS / API LAYER
        try {
            const customization = await handleGetCustomization(url)
    
            if (!customization || !customization.data) return false
    
            return customization.data
        }
        catch (e) {
            console.log({e}, 'In customization service - > getCustomizationForCoffee')
            return false
        }
    }
}

const customizationService = new CustomizationService()

export default customizationService