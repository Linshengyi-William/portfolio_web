import React from 'react'
import "./header.css"
import HeaderLink from "./HeaderLink"
import Me from "./../../assets/Me.png"
import HeaderSocials from "./HeaderSocials"
import { useEffect, useState } from 'react'
import $ from 'jquery'


const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const items = ['Software Engineer','Frontend Developer','Full-Stack Engineer','Technical Consultant','Data Analyst', 'Data Scientist'];
type FadeProp = { fade: 'fade-in' | 'fade-out' }
const quotoSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://motivational-quotes1.p.rapidapi.com/motivation",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "1a1047939dmsh27b5d3c69b7bf0bp198ae3jsn1668467c61ff",
		"X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
	},
	"processData": false,
	"data": {
		"key1": "value",
		"key2": "value"
	}
};



var quote;


const Header = () => {

    
    // const [quote, serQuote] = useState(0)
    useEffect(() => {
        $.ajax(quotoSettings).done(function (response) {
      console.log(response);
      quote = response;
      console.log(typeof(quote))
      for(let i = 0; i < quote.length;i++){
        console.log(quote[i])
      }
      
      
    });
    }, []);
    

    // console.log(quote)
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

                <h4 className="text-light quote_container">{quote}</h4>
                
                <h5>Hello I'm</h5> 
                <h1>Linshengyi Sun</h1>
                <h5 className="text-light">
                    Master CS student @Rice seeking 2024 Summer Internship as <span className={fadeProp.fade}>{items[wordOrder]}</span>. 
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
