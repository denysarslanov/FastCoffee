import * as React from "react"
import HeaderContainer from "../containers/Header/HeaderContainer"
import ProductsContainer from "../containers/ProductsContainer"
import BlockTitle from "../components/simple/Navbar/BlockTitle/BlockTitle"
import c from '../styles/main.module.css'
import { getNavLinks } from "../core/selectors"
import LinkBtn from "../components/simple/LinkBtn/LinkBtn"
import ShowAllItemsBlock from "../components/ordinary/ShowAllItemsBlock/ShowAllItemsBlock"
import AgitationBanner from "../containers/AgitationBanner"
import TryTodayContainer from "../containers/TryTodayContainer"
import Contacts from "../components/simple/Contacts/Contacts"
import Footer from "../components/ordinary/Footer/Footer"
import { useParams } from "react-router"
import Preloader, { PreloaderBlock } from "../components/simple/Preloader/Preloader"
import { useScroll } from "@react-hooks-library/core"
import { shallowEqual } from "react-redux"

interface Params {
    contacts?: 'contacts',
    about?: 'about'
}

export const defaultScroll = (reactRef: React.MutableRefObject<any>) => reactRef.current.scrollIntoView({
    behavior: "smooth"
});


const Main: React.FC<MainProps> = (props = {}) => {
    let loading = !!props.isLoading

    const params: Params = useParams();

    const refs = {
        contacts: React.useRef<HTMLDivElement>(document.createElement("div")),
        about: React.useRef<HTMLDivElement>(document.createElement("div"))
    }

    const { contacts, about } = refs

    const scrollToBlock = (r = '') => {
        switch (r) {
            case 'contacts':
                if (!!contacts) defaultScroll(contacts)
                return
            case 'about':
                if (!!about) defaultScroll(about)
                return
            default:
                return false
        };
    }

    React.useEffect(() => {
        if (!!params.contacts && params.contacts in refs) scrollToBlock(params.contacts)
        if (!!params.about && params.about in refs) scrollToBlock(params.about)
    }, [params]);

    return <main>
        <HeaderContainer />
        {loading === true ? <PreloaderBlock /> : <ProductsContainer />}
        <ShowAllItemsBlock />
        <div className={c.agitationBanner} ref={about}>
            <AgitationBanner />
        </div>
        <section className={c.tryToday}>
            <TryTodayContainer />
        </section>
        <section className={c.contactsWrapper}>
            <Contacts ref={contacts} />
        </section>
        <Footer />
    </main>
}

export interface MainProps {
    isLoading?: boolean
}

export default Main