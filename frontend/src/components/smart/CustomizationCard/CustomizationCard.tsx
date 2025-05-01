import * as React from "react"
import { connect } from "react-redux"
import State from "../../../core/models/state"
import { getActiveCardUrl } from "../../../core/selectors"
import useCustomization from "../../../core/hooks/useCustomization"
import c from "./CustomizationCard.module.css"
import SizeBtn from "../../ui/Size/Size"
import { Size, Sizes, SizesModel } from "../../../core/models/cutomizationModel"
import Nullable from "../../../core/types/nullable"
import { getNumberFromSize } from "../../../core/utils/calculates"

const { useEffect } = React

interface DefaultSize {
    price: number,
    size: Nullable
}

const CustomizationCard: React.FC<CustomizationCardProps> = ({ url, defaultPrice }) => {
    let { sizes, handleCustomization } = useCustomization(url)
    const defaultSize: Size | DefaultSize = sizes !== null && sizes !== undefined ? sizes.m : { price: defaultPrice, size: null }
    const [activeSize, setActiveSize] = React.useState(defaultSize)

    let customizationHandlerWasCalled = false

    useEffect(() => {
        setActiveSize(defaultSize)
    }, [sizes])

    useEffect(() => {
        if (!!url && typeof url === 'string' && !customizationHandlerWasCalled) {
            handleCustomization(url)
        }
    }, [url])

    const handleSetActiveSize = (value: Size) => {
        setActiveSize(value)
    }

    const sizesObj: SizesModel = JSON.parse(JSON.stringify(sizes))

    const getIsCurrentCardActive = (size: Sizes): boolean => {
        if (typeof activeSize.size !== 'string' || !sizesObj || typeof sizesObj[size] === 'undefined') return false
        let foundSize = sizesObj[size] as Size
        return getNumberFromSize(activeSize.size) === getNumberFromSize(foundSize.size)
    }

    return <>
        {sizes === undefined && sizes === null ? <></> : <div className={c.sizes}>
            <h3 className={c.sizes__title}>Розміри</h3>
            {sizesObj === null || sizesObj === undefined ? <></> : <div className={c.sizes__content}> 
                {'s' in sizesObj ? <SizeBtn callback={() => handleSetActiveSize({ ...sizesObj.s } as Size)} size="Маленький" active={getIsCurrentCardActive('s')} /> : <></>}
                <SizeBtn callback={() => handleSetActiveSize({ ...sizesObj.m })} size="Звичайний" active={getIsCurrentCardActive('m')} />
                {'l' in sizesObj ? <SizeBtn callback={() => handleSetActiveSize({ ...sizesObj.l } as Size)} size="Великий" active={getIsCurrentCardActive('l')} /> : <></>}
                {'xl' in sizesObj ? <SizeBtn callback={() => handleSetActiveSize({ ...sizesObj.xl } as Size)} size="Екстра Великий" active={getIsCurrentCardActive('xl')} /> : <></>}
            </div>}
            <div className={c.customization__price}>
                <h4>
                    Ціна: {activeSize !== undefined && activeSize !== null ? activeSize.price : defaultPrice} ₴
                    {activeSize !== undefined && activeSize !== null && activeSize.size !== null ? <span>  ( {activeSize.size} мл )</span> : <></>}
                </h4>
            </div>
        </div>
        }

    </>
}

export interface CustomizationCardProps {
    url: string,
    defaultPrice: number
}

const mapStateToProps = (state: State) => ({
    url: getActiveCardUrl(state)
})

export default connect(mapStateToProps, null)(CustomizationCard)