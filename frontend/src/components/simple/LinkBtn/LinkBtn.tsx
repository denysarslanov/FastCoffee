import * as React from "react"
import { NavLink } from "react-router-dom"
import { NavigationLinks } from "../../../core/config"
import DefaultBtn from "../../ui/DefaultBtn/DefaultBtn"

const LinkBtn : React.FC<LinkBtnProps> = ({to, text}) => {
    return <NavLink to={`/${to}`}>
        <DefaultBtn text={text} />
    </NavLink>
}

export interface LinkBtnProps {
    to: NavigationLinks,
    text: string
}

export default LinkBtn