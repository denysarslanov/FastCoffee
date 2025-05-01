import * as React from "react"
import c from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'

const Preloader: React.FC = () => {
    return <div className={c.preloader}>
        <img src={preloader} alt="Loading..." />
    </div>
}

export const PreloaderBlock: React.FC = () => {
    return <div className={c.wrapper}>
        <div className={c.preloader}>
            <img src={preloader} alt="Loading..." />
        </div>
    </div>
}

export default Preloader