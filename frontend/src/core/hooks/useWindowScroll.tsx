import * as React from "react"

// VERY VERY EXPENSIVE

const useWindowScroll = () => {
    const [scroll, setScroll] = React.useState(0)
    const [deviceHeight, setDeviceHeight] = React.useState(window.innerHeight)

    window.onresize = function () {
        setDeviceHeight(window.innerHeight)
    }

    window.onscroll = function () { 
        if (scroll < deviceHeight) {
            if (window.scrollY > deviceHeight) setScroll(window.scrollY)
        }

        else {
            if (window.scrollY < deviceHeight) setScroll(window.scrollY)
        }
     }

    return [scroll, deviceHeight]
}

export default useWindowScroll