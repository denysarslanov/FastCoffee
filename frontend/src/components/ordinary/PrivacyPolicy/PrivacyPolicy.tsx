import * as React from "react"
import c from './PrivacyPolicy.module.css'
import { PRIVACY_POLICY_TEXT } from "../../../core/constants"

interface ListItemWithTitleProps {
    title: string,
    text: string
}

export const ListItemWithTitle: React.FC<ListItemWithTitleProps> = ({ title, text }) => <li className={c.policy__item}>
    <h2 className={c.item__title}>{title}</h2>
    <p className={c.item__text}>{text}</p>
</li>

const PrivacyPolicy: React.FC = () => {
    return <section className={c.policy}>
        <ul className={c.policy__list}>
            {PRIVACY_POLICY_TEXT.map((i, index) => <ListItemWithTitle {...i} key={index} />)}
        </ul>
    </section>
}


export default PrivacyPolicy