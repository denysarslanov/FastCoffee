import * as React from 'react'
import Navbar from '../components/simple/Navbar/Navbar'
import NavbarWrapper from '../components/ordinary/NavbarWrapper/NavbarWrapper'
import Terms from '../components/simple/Terms/Termas'
import { termsAndConditions } from '../core/constants'
 
const TermsPage : React.FC<TermsProps> = () => {
    return <>
        <NavbarWrapper black={true} />
        <Terms terms={termsAndConditions} />
    </>
}

interface TermsProps {

}

export default TermsPage