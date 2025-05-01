import * as React from "react"
import c from './NavbarLink.module.css'

const HeaderLink: React.FC<HeaderLinkProps> = ({text, linkTo, black}) => {
    const linkClass = black === true ? c.link_black : c.link
    return <>
        <li className={c.header__link}>
            <a href={linkTo} className={linkClass}>{text}</a>
        </li>
    </>
}

export interface HeaderLinkProps {
    text: string,
    linkTo: string,
    black? : boolean
}

export default HeaderLink