  import * as React from "react"
import c from './Banner.module.css'
import { Banner as BannerProps } from "../../../core/models/state"
import BlockTitle from "../Navbar/BlockTitle/BlockTitle"

const Banner: React.FC<BannerProps> = ({ imgUrl, title, text }) => {
    <h3 className={c.banner__title}>{title}</h3>
    return <>
        <section className={c.banner}>
            <BlockTitle title="Чому обирають Fast Coffee?" />
            <div className={c.banner__contentWrapper}>
                <div className={c.banner__imgWrapper}>
                    <img className={c.banner__img} src={imgUrl} alt="Image didnt load" />
                    <div className={c.banner__mask}></div>
                </div>
                <div className={c.banner__content}>
                    <p className={c.banner__text}>
                        {text}
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default Banner