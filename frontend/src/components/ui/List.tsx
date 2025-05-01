import * as React from "react"
import c from "./List.module.css"

const List : React.FC<ListProps> = ({list}) => {
    return <ul className="list">
        {list.map((i) => 
            <li className='list__item'>
                <h4 className={c.list__title}>{i.title}</h4>
                <span className={c.list__text}>{i.text}</span>
            </li>
        )}
    </ul>
}

export interface AgitationalBannerItem {
    title : string,
    text: string
}

export interface ListProps {
    list: AgitationalBannerItem[]
}

export default List