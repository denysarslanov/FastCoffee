import * as React from "react"
import c from './NavbarWrapper.module.css'
import Navbar from "../../simple/Navbar/Navbar"
import { NavLink } from "react-router-dom"
import { COMPANY } from "../../../core/constants"
import config from "../../../core/config"
import { useScroll } from "@react-hooks-library/core"
import useWindowScroll from "../../../core/hooks/useWindowScroll"

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ black, isFixed }) => {

    const [scroll, deviceHeight] = useWindowScroll()

    const [blackState, setBlackState] = React.useState<boolean>(typeof black === 'undefined' ? false : black)

    const navbarClass = blackState === true ? c.navbarContentBlack : c.navbarContainer

    React.useEffect(() => {
        if (!isFixed) return () => {}
        if (scroll > deviceHeight) setBlackState(true)    
        else if (scroll > 0 && scroll <= deviceHeight) setBlackState(false)
    }, [scroll] )

    React.useEffect(() => {
        console.log({blackState})
    }, [blackState])

    return <>
        <div className={navbarClass} style={!!isFixed ? {position: 'fixed', top: 0, left: 0, width: '100vw'} : {position: 'static'} }>
            <h1 className={c.logoContainer}>
                <NavLink to={config.nav.index} >{COMPANY}</NavLink>
            </h1>
            <div className={c.nav}>
                <Navbar black={blackState} />
            </div>
        </div>
    </>
}

export interface NavbarWrapperProps {
    black?: boolean,
    isFixed?: boolean
}

export default NavbarWrapper