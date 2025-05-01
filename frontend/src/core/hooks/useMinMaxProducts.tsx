import * as React from "react"
import { Coffee } from "../models/CoffeeProduct"
import { calculateMediumProductsPrice, getMinMax } from "../utils/calculates"

const { useEffect, useReducer } = React

const useMinMaxProducts = <T extends { defaultPrice: number }>(minmax: string): [number, number] => {

    interface State {
        min: number,
        max: number
    }

    const initial: State = { min: 0, max: 0 }

    const ChangeMin = (min: number) => ({ type: 'changemin' as const, min })
    const ChangeMax = (max: number) => ({ type: 'changemax' as const, max })

    type Action = ReturnType<typeof ChangeMin> | ReturnType<typeof ChangeMax>

    const reducer = (state: State = initial, action: Action): State => {
        switch (action.type) {
            case "changemax":
                return { ...state, max: action.max }
            case "changemin":
                return { ...state, min: action.min }
        }
    }

    const [state, dispatch] = useReducer(reducer, initial)
    const { min, max } = state

    useEffect(() => {
        if (typeof minmax === 'string') {
            const minmaxArr = minmax.split('-')
            console.log({minmaxArr})
            dispatch(ChangeMin(Number(minmaxArr[0].split('(')[1])))
            dispatch(ChangeMax(Number(minmaxArr[1].split(')')[0])))
        }
    }, [minmax])

    return [min, max]
}

export default useMinMaxProducts