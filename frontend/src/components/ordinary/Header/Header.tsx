import * as React from "react"
import c from './Header.module.css'
import Navbar from "../../simple/Navbar/Navbar"
import NavbarWrapper from "../NavbarWrapper/NavbarWrapper"
import HeaderContent from "../HeaderContent/HeaderContent"
import { useScroll } from "@react-hooks-library/core"
import useWindowScroll from "../../../core/hooks/useWindowScroll"
import { HeaderProps } from './../../../containers/Header/HeaderContainer';
import { shallowEqual } from "react-redux"

const Header: React.FC<HeaderProps> = () => {
    // TODO
    // REPLACE <a> BY THE NAVLINK
    return <header className={c.header}>
        <NavbarWrapper black={false} isFixed={true}/>
        <div className={c.header__contentWrapper}>
            <HeaderContent />
        </div>
    </header>
}

export default Header