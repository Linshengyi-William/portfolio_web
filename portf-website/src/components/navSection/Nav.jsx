import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookHalf} from "react-icons/bs"
import {FaRegHandshake} from "react-icons/fa"
import {BiMessageDetail} from "react-icons/bi"
import {useState} from 'react'
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href = "#" onClick={() => setActiveNav('#')}className={activeNav ==='#' ? 'active': ''}><AiOutlineHome/></a>
            <a href = "#about" onClick={() => setActiveNav('#about')}className={activeNav ==='#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href = "#portfolio" onClick={() => setActiveNav('#portfolio')}className={activeNav ==='#portfolio' ? 'active': ''}><BsBookHalf/></a>
            {/* <a href = "#services" onClick={() => setActiveNav('#services')}className={activeNav ==='#services' ? 'active': ''}><FaRegHandshake/></a> */}
            <a href = "#contact" onClick={() => setActiveNav('#contact')}className={activeNav ==='#contact' ? 'active': ''}><BiMessageDetail/></a>

        </nav>
    )
}

export default Nav
