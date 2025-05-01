import './index.css';
import * as React from 'react';
import Main, { MainProps } from './pages/main';
import store from './core/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemsPage from './pages/allItemsPage';
import { connect, shallowEqual, useDispatch } from 'react-redux';
import State from './core/models/state';
import { getAllItems, getNavLinks } from './core/selectors';
import { Coffee } from './core/models/CoffeeProduct';
import CoffeeCardPage from './pages/coffeeCardPage';
import config from './core/config';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import coffeeService from './core/services/coffeeService';
import { setCoffeeGroups } from './core/store/actions/rootActions';
import coffeeGroupToState from './core/utils/fromServerModelToState';
import NavbarWrapper from './components/ordinary/NavbarWrapper/NavbarWrapper';
import Preloader from './components/simple/Preloader/Preloader';
import Footer from './components/ordinary/Footer/Footer';
import HeaderContainer from './containers/Header/HeaderContainer';
import TermsPage from './pages/terms';
import HeaderContent from './components/ordinary/HeaderContent/HeaderContent';

const { nav } = config
const { group, index, items, privacyPolicy, terms } = nav

interface MainWrapperContextProps<T> extends MainProps {
    Context: React.Context<T>,
    value: any
}

const App: React.FC<AppProps> = ({ allCardsPages, windowRef }) => {

    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()


    React.useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            const response = await coffeeService.getAllCoffeeGroups()

            if (response) {
                dispatch(setCoffeeGroups(coffeeGroupToState(response)))
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            setLoading(false)
        }
    }, [dispatch])


    return <>
        <BrowserRouter>
                <Routes>
                    <Route path='/:contacts?/' index element={<Main isLoading={loading} />} />
                    <Route path='/:about?/' index element={<Main isLoading={loading} />} />
                    <Route path='/drinks/:url' element={<ItemsPage />} />
                    <Route path='/drinks' element={<ItemsPage />} />
                    {allCardsPages.map((coffee, index) => {
                        return <Route path={`${getNavLinks().item}/${coffee.url}/`} element={<CoffeeCardPage key={index} {...coffee} />}></Route>
                    })}
                    <Route path='products/:product' element={<CoffeeCardPage />}></Route>
                    <Route path={`/${privacyPolicy}`} element={<PrivacyPolicyPage />} />
                    <Route path={`/${terms}`} element={<TermsPage />} />

                </Routes>
        </BrowserRouter>

    </>
}

interface AppProps {
    allCardsPages: Coffee<string>[],
    windowRef: any
}

const mapStateToProps = (state: State) => ({
    allCardsPages: getAllItems(state)
})

export default connect(mapStateToProps, null)(App);