import React from 'react'
import RESUME from "../../assets/MyResume_WebDevFrontEnd.pdf"
const HeaderLink = () => {
    return (
        <div className='header_link'>
            <a href={RESUME} download className='btn'> Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
            
        </div>
    )
}

export default HeaderLink
