import React from 'react'
import "./header.css"
import HeaderLink from "./HeaderLink"
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5> 
                <h1>Linshengyi Sun</h1>
                <h5 className="text-light">Software Developer</h5>
                <HeaderLink />
            </div>
        </header>
    )
}

export default Header
