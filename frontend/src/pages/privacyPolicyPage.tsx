import * as React from "react"
import NavbarWrapper from "../components/ordinary/NavbarWrapper/NavbarWrapper"
import PrivacyPolicy from "../components/ordinary/PrivacyPolicy/PrivacyPolicy"
import c from '../styles/privacyPolicy.module.css'
import Footer from "../components/ordinary/Footer/Footer"
import BlockTitle from "../components/simple/Navbar/BlockTitle/BlockTitle"

const PrivacyPolicyPage : React.FC = () => {
    return <>
        <NavbarWrapper black={true} />
        <BlockTitle title="Privacy Policy"/>
        <main className={c.privacyWrapper}>
            <PrivacyPolicy />
        </main>
        <Footer />
    </>
}


export default PrivacyPolicyPage