import * as React from "react"
import HeaderLink, { HeaderLinkProps } from "../../ui/NavbarLink/NavbarLink"
import c from './Navbar.module.css'
import config from "../../../core/config"
import ButterMenu from "../../ui/ButterMenu/ButterMenu"

const {nav} = config
const {group, index, items, privacyPolicy, terms} = nav

const links : Array<HeaderLinkProps> = [
    {linkTo: `/${items}`, text: 'Уся кава'},
    {linkTo: `/contacts`, text: 'Контакти'},
    {linkTo: '/about', text: 'Про нас'}
]

const Navbar : React.FC<NavbarProps> = ({black})  => {

    const [isBurgerOpened, setIsBurgerOpened] = React.useState(false)
    const propsForHeaderLink = typeof black === 'boolean' ? black : false

    const [burgerTheme, setBurgerTheme] = React.useState<'dark' | 'white'>(!!propsForHeaderLink ? 'dark' : 'white')

    React.useEffect(() => {
        !!isBurgerOpened ? setBurgerTheme('white') : setBurgerTheme(!!propsForHeaderLink ? 'dark' : 'white')
    }, [isBurgerOpened])

    React.useEffect(() => {
        setBurgerTheme(!!propsForHeaderLink ? 'dark' : 'white')
    }, [black])

    return <>
        <nav className={`${c.navbar} ${isBurgerOpened ? c.opened : false}`}>
            <ul className={c.navbar__list}>
                {links.map((i, index) => <HeaderLink key={index} text={i.text} linkTo={i.linkTo} black={burgerTheme === 'dark' ? true : false}/>)}
                <div className={c.burgerContainer} onClick={() => setIsBurgerOpened(!isBurgerOpened)}>
                    <ButterMenu theme={burgerTheme} isOpened={isBurgerOpened}/>
                </div>
            </ul>
        </nav>
    </>
}

export interface NavbarProps {
    black? : boolean 
}

export default Navbar