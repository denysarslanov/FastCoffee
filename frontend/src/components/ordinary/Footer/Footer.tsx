import * as React from "react"
import c from './Footer.module.css'
import { NavLink } from "react-router-dom"
import config from "../../../core/config"
import { CONTACTS } from "../../../core/constants"

const Footer: React.FC<FooterProps> = ({ }) => {
    return <footer className={c.footer}>
        <div className={c.footer__block}>
            <p className={c.footer__item}><NavLink to={`/${config.nav.privacyPolicy}`}>Privacy Policy</NavLink></p>
            <p className={c.footer__item}><NavLink to={`/${config.nav.terms}`}>Умови та положення</NavLink></p>
        </div>
        <div className={c.footer__block}>
            {CONTACTS.map(i => <p>{i.text}</p>)}
        </div>
    </footer>
}

export interface FooterProps {

}

export default Footer