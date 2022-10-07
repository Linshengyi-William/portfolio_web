import React from 'react'
import RESUME from "../../assets/MyResume_v-1.pdf"
const HeaderLink = () => {
    return (
        <div className='header-link'>
            <a href={RESUME} download className='btn'> Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
            
        </div>
    )
}

export default HeaderLink
