import * as React from "react"
import Banner from "../components/simple/Banner/Banner"
import State, { BannerState as BannerInterface} from "../core/models/state"
import { connect } from "react-redux"
import { getAgitationBanner } from "../core/selectors"
import List from "../components/ui/List"

const AgitationBanner : React.FC<BannerInterface> = (props) => {
    return <>
        {typeof props.text === 'string' ? <Banner {...props} /> : 
        !!Array.isArray(props.content) ? <Banner {...props} text={<List list={[...props.content]}/>} /> : <></>}
    </>
}

const mapStateToProps = (state : State) : BannerInterface => getAgitationBanner(state)

export default connect(mapStateToProps, null)(AgitationBanner) 