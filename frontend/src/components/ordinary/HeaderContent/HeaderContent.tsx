import * as React from "react"
import c from './HeaderContent.module.css'

const HeaderContent = (props: object) => {
    return <>
        <div className={c.header__content}>
            <h1>Fast Coffee</h1>
            <p>Насолоджуйся ароматною кавою та свіжими смузі щодня. Швидко. Смачно. З любов’ю.</p>
            <h3>Fast Coffee — твоя енергія в кожній чашці!</h3>
        </div>
    </>
}

export default HeaderContent