import * as React from "react"
import c from './TryToday.module.css'
import { connect } from "react-redux"
import State from "../core/models/state"
import { Coffee } from "../core/models/CoffeeProduct"
import { getRandomCoffee } from "../core/selectors"
import TryToday, { TryTodayProps } from "../components/ordinary/TryToday/TryToday"
import { setRandomCoffeeThunk } from "../core/store/actions/rootActions"
import { useDebounce } from "@react-hooks-library/core"

const TryTodayContainer : React.FC<TryTodayContainerProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const deferredLoading = React.useDeferredValue(isLoading)


    React.useEffect(() => {
        console.log({isLoading})
    }, [isLoading])

    React.useEffect(() => {
        if (!props.coffee) {
            props.setRandomCoffeeThunk()
        }
        else {
            setIsLoading(false)
        }
    }, [props.coffee])

    const handleUpdateRandomCoffee = () => {
        if (!isLoading) {
            setIsLoading(true)
            props.setRandomCoffeeThunk()
        }
    } 

    return <TryToday coffee={props.coffee} isLoading={deferredLoading} handleUpdateRandomCoffee={handleUpdateRandomCoffee} />
}

export interface TryTodayContainerProps {
    coffee: Coffee<string>,
    setRandomCoffeeThunk: Function,
}

const mapStateToProps = (state : State) : {coffee : Coffee<string> | null} => ({
    coffee: getRandomCoffee(state)
})

export default connect(mapStateToProps, {setRandomCoffeeThunk})(TryTodayContainer)