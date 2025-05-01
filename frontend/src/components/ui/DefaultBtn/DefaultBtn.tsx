import * as React from "react"
import c from './DefaultBtn.module.css'

const DefaultBtn : React.FC<DefaultBtnProps> = ({text}) => {
    return <button className={c.btn}>
        {text}
    </button>
}

export interface DefaultBtnProps {
    text : string,
}

export default DefaultBtn