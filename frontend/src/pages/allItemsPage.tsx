import * as React from "react"
import NavbarWrapper from "../components/ordinary/NavbarWrapper/NavbarWrapper"
import AllItemsContainer from "../containers/AllItemsContainer"
import { useParams } from "react-router"
import BlockTitle from "../components/simple/Navbar/BlockTitle/BlockTitle"
import { connect, useDispatch } from "react-redux"
import State, { ProductGroup } from "../core/models/state"
import { getAllProductsGroups, getLoadedAllProducts } from "../core/selectors"
import c from '../styles/allItems.module.css'
import ShowAllItemsBlock from "../components/ordinary/ShowAllItemsBlock/ShowAllItemsBlock"
import Footer from "../components/ordinary/Footer/Footer"
import { PreloaderBlock } from "../components/simple/Preloader/Preloader"
import coffeeService from "../core/services/coffeeService"
import { coffeeServerToState } from "../core/utils/fromServerModelToState"
import { CoffeeServer } from './../core/models/state';
import { setCoffeeProductToGroup, setCoffeeThunk } from "../core/store/actions/rootActions"

const { useState } = React

const ItemsPage: React.FC<ItemsPageProps> = (props) => {
    const { allGroups, loadedAllProducts } = props
    const defaultValue = 'Уся кава'

    const [isLoading, setIsLoading] = useState(false)

    const [fetchDataWasCalled, setFetchDataWasCalled] = useState(false)

    const [groupName, setGroupName] = useState(defaultValue)
    const [groupUrl, setGroupUrl] = useState<string>('')
    const [groupId, setGroupId] = useState<number | false>(false)

    const { url } = useParams<string>()

    const dispatch = useDispatch()
/*
    const fetchData = async (fetchAll: boolean): Promise<any | false> => {
        try {
            if (fetchDataWasCalled || loadedAllProducts || !groupId) return false

            setFetchDataWasCalled(true)

            let result: false | CoffeeServer[]

            switch (fetchAll) {
                case true: result = await coffeeService.getAllCoffee()
                case false: result = await coffeeService.getCoffeeByGroupName(groupName)
            }

            console.log({ result })
            if (!result) return false

            const coffeeServerArray = coffeeServerToState(result)

            dispatch(setCoffeeProductToGroup(coffeeServerArray[0]))
        }
        catch (e) {
            setGroupName('Невдалося загрузити')
            console.log({ e })
        }
    }
*/
    React.useLayoutEffect(() => {
        const foundGroup = allGroups.find((i) => i.url === url)
        if (!!url) {
            if (!!foundGroup && 'url' in foundGroup) {
                setGroupName(foundGroup.name)
                setGroupId(foundGroup.groupId)
                setGroupUrl(foundGroup.url)
            }
        }
    }, [allGroups])

    React.useEffect(() => {
        const foundGroup = allGroups.find((i) => i.url === url)
        if (!!foundGroup && foundGroup.products.length === 0 && groupName !== defaultValue && !fetchDataWasCalled) {
            setFetchDataWasCalled(true)
            setIsLoading(true)
            props.setCoffeeThunk(groupUrl, () => { setIsLoading(false) })
        }
    }, [groupName])

    React.useEffect(() => {
        if (!url) {
            setGroupName(defaultValue)
            setGroupId(false)
        }

        console.log({url, groupUrl})
    }, [url])

    React.useEffect(() => {
        if (!loadedAllProducts && !url && allGroups.length > 0) {
            console.log(allGroups.length)
            setIsLoading(true)
            props.setCoffeeThunk(undefined, () => { setIsLoading(false) })
        }
    }, [url, allGroups])

    return <div className={c.wrapper}>
        <NavbarWrapper black={true}/>
        <section className={c.blockTitle}>
            <BlockTitle title={groupName} text="Список кави" />
        </section>
        {!!groupId ? <AllItemsContainer groupId={groupId} /> : isLoading ? <PreloaderBlock /> : <AllItemsContainer />}
        <ShowAllItemsBlock title="Побачити усю каву" />
        <Footer />
    </div>
}

export type ItemsPageProps = {
    allGroups: ProductGroup[],
    loadedAllProducts: boolean,
    setCoffeeThunk: Function
}

const mapStateToProps = (state: State) => ({
    allGroups: getAllProductsGroups(state),
    loadedAllProducts: getLoadedAllProducts(state)
})

export default connect(mapStateToProps, { setCoffeeThunk })(ItemsPage)