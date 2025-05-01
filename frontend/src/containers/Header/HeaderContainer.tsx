import * as React from "react"
import Header from "../../components/ordinary/Header/Header"
import {connect} from 'react-redux'

const HeaderContainer : React.FC<HeaderProps> = () => {
    return <Header />
}

const mapStateToProps = () => ({
    
})

export interface HeaderProps {
    
}

export default HeaderContainer