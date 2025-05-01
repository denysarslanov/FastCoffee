import * as React from 'react'
import c from './terms.module.css'
import BlockTitle from '../Navbar/BlockTitle/BlockTitle'
import List from '../../ui/List'
import { TermItem } from '../../../core/constants'

const TermPoint : React.FC<TermPointprops> = ({termPoints, title}) => {
    return <li className={c.termItem}>
        <h4 className={c.point__title}>{title}</h4>
        {termPoints.map((i, index) => <p className={c.termItem__point}>{i}</p>)}
    </li>
}

interface TermPointprops {
    title: string,
    termPoints: string[]
}

const Terms : React.FC<TermsProps> = ({terms}) => {
    return <main className={c.terms}>
        <section className={c.terms__title}>
        <BlockTitle title='Умови та положення' text='Ласкаво просимо до Fast Coffee! Використовуючи наш вебсайт та послуги, ви погоджуєтеся дотримуватись наступних умов та положень. Будь ласка, уважно ознайомтесь із ними перед тим, як робити замовлення або взаємодіяти з нашим сайтом.' />
        </section>
        <section className={c.terms__content}>
            <ul className={c.terms__list}>
                {terms.map((i, index) => <TermPoint title={i.title} termPoints={i.data} />)}
            </ul>
        </section>
    </main>
}

interface TermsProps {
    terms : TermItem[]
}

export default Terms