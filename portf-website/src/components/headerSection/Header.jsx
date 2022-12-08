import React from 'react'
import "./header.css"
import HeaderLink from "./HeaderLink"
import Me from "./../../assets/Me.png"
import HeaderSocials from "./HeaderSocials"
import { useEffect, useState } from 'react'


const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const items = ['Software Developer','Frontend Developer','Full-Stack Developer','Techincal Writer','Project Manager','Data Analyst'];
type FadeProp = { fade: 'fade-in' | 'fade-out' }


const Header = () => {

    // type FadeProp = { fade: 'fade-in' | 'fade-out' }

    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' })
    const [wordOrder, setWordOrder] = useState(0)
    useEffect(() => {
        const fadeTimeout = setInterval(() => {
          fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
        }, FADE_INTERVAL_MS)
    
        return () => clearInterval(fadeTimeout)
      }, [fadeProp])
    
      useEffect(() => {
        const wordTimeout = setInterval(() => {
          setWordOrder((prevWordOrder) => (prevWordOrder + 1) % items.length)
        }, WORD_CHANGE_INTERVAL_MS)
    
        return () => clearInterval(wordTimeout)
      }, [])
    
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5> 
                <h1>Linshengyi Sun</h1>
                <h5 className="text-light">
                 {/*  <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>, I'm Julia. */}
                    Passionate CS New Grad with 3.8 GPA looking for job opportunities as <span className={fadeProp.fade}>{items[wordOrder]}</span>. 
                    Anything relates to technology!
                    {/* {stringItem.name}: Software Developer */}
                    </h5>
                <HeaderLink />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>
                {/* <a href="#contact" className='scroll_down'> Scroll Down</a>  */}
                
            </div>

        </header>
    )
}

export default Header
