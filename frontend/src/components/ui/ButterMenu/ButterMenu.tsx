import * as React from "react"
import c from "./ButterMenu.module.css"

export interface ButterProps {
    isOpened: boolean,
    theme? : 'dark' | 'white'
}

// THIS BUTTER ICON WILL APPEAR IN EVERY CORNER OF APP WHEN DEVICE-WIDTH WILL BE SMALL ENOUGH (900 px)

const ButterMenu : React.FC<ButterProps> = (props) => {

    const {isOpened} = props
    
    return <ul className={!isOpened ? c.butter : c.butterOpened}>
        <li className={`${c.line} ${props.theme === 'white' ? c.white : c.dark}`}></li>
        <li className={`${c.line} ${props.theme === 'white' ? c.white : c.dark}`}></li>
        <li className={`${c.line} ${props.theme === 'white' ? c.white : c.dark}`}></li>
    </ul>
}

export default ButterMenu