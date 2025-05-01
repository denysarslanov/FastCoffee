import * as React from "react"
import c from './BlockTitle.module.css'

const BlockTitle : React.FC<BlockTitleProps> = (props : BlockTitleProps) => {
    const {title} = props
    return <div className={c.block}>
        <h1 className={c.title}>{title}</h1>
        {!!props.text ? <p className={c.text}>{props.text}</p> : <></>}
    </div>
}

export interface BlockTitleProps {
    title : string,
    text? : string
}

export default BlockTitle