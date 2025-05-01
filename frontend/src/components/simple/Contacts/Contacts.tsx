import * as React from "react"
import c from './Contacts.module.css'
import { ContactProps, CONTACTS } from "../../../core/constants"
import BlockTitle from "../Navbar/BlockTitle/BlockTitle"


export const Contact: React.FC<ContactProps> = ({ text, imgLink }) => {
    return <li className={c.contact}>
        <img src={imgLink} alt="contact" className={c.contact__icon} />
        <p className={c.contact__text}>{text}</p>
    </li>
}

const Contacts = React.forwardRef((props : ContactsProps, ref) => {
    return <section className={c.contacts} id="contacts" ref={ref as React.LegacyRef<HTMLElement>}>
        <BlockTitle title="Наші контакти" />
        <ul className={c.contacts__list}>
            {CONTACTS.map((i, index) => <Contact {...i} key={index} />)}
        </ul>
    </section>
})

export interface ContactsProps {

}

export default Contacts