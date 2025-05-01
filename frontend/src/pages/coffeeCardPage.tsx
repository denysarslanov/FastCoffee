import * as React from "react"
import { Coffee } from "../core/models/CoffeeProduct"
import NavbarWrapper from "../components/ordinary/NavbarWrapper/NavbarWrapper"
import ProductCard from "../components/smart/ProductCard/ProductCard"
import BlockTitle from "../components/simple/Navbar/BlockTitle/BlockTitle"
import c from '../../src/styles/coffeeCardPage.module.css'
import Footer from "../components/ordinary/Footer/Footer"
import { useParams } from "react-router"
import { PreloaderBlock } from "../components/simple/Preloader/Preloader"
import coffeeService from "../core/services/coffeeService"
import { CoffeeServer } from "../core/models/state"
import { coffeeServerToState } from "../core/utils/fromServerModelToState"

const fetchProduct = async (url : string, callbackFn : (p : Coffee<string>) => void) => {
    const response = await coffeeService.getCoffeeByUrl(url)
    if (!response) return false
    callbackFn(coffeeServerToState(response)[0])
}

const CoffeeCardPage : React.FC<CoffeeCardPageProps> = (props) => {
    const [product, setProduct] = React.useState(props as Coffee<string>)
    const params = useParams()

    React.useEffect(() => {
        if (params.product) {
            fetchProduct(params.product, (p) => {setProduct(p)})
        }
    }, [])

    return <div className={c.coffeeCardPage}>
        <NavbarWrapper black={true} />
        <div className={c.blockTitleWrapper}>
            {!product ? <PreloaderBlock /> : <BlockTitle title={product.name} />}
        </div>
        {!product ? <PreloaderBlock /> : <ProductCard {...product} forPage={true} />}
        <Footer />
    </div>
}

export interface CoffeeCardPageProps {
    coffee?: Coffee<string>
}

export default CoffeeCardPage