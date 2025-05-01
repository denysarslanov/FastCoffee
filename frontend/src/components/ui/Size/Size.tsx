import * as React from "react"
import c from './Size.module.css'
import { Size } from "../../../core/models/cutomizationModel"

const SizeBtn : React.FC<SizeBtnProps> = ({size, callback, active}) => {
    return <button className={!!active ? c.sizeActive : c.size} onClick={() => {callback()}}>
        {size}
    </button>
}

interface SizeBtnProps {
    size : string,
    callback: Function,
    active : boolean
}


export default SizeBtn