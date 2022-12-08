import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/Android-openweatherImage.png'
import IMG2 from '../../assets/star-wars-characters.jpeg'
import IMG3 from '../../assets/ALLRT-Logo.png'

const data = [
    {
        id:1,
        image: IMG1,
        title:"Android OpenWeather App",
        github: "https://github.com/Linshengyi-William/Android-OpenWeather-App"
    },
    {
        id:2,
        image: IMG2,
        title:"Android StarWar App",
        github: "https://github.com/Linshengyi-William/Android-StarWar-App"
    },
    {
        id:3,
        image: IMG3,
        title:"Classroom Polling OSS: ALeRT",
        github: "https://github.com/Linshengyi-William/Classroom-Polling-CSS-ALeRT"
    },
]
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5> My Recent Work</h5>
            <h2> Portfolio</h2>
            <div className="container portfolio_container">

                {
                    data.map(({id,image,title,github}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-btn">
                                    <a href={github} className='btn btn-primary'>Github</a>
                                    {/* <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
                                </div>
                            </article>
                        )
                    })
                }
                {/* <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-btn">
                        <a href="https://github.com/Linshengyi-William/Android-OpenWeather-App" className='btn btn-primary'>Github</a>
                        {/* <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
                    {/* </div> */}
                {/* </article> */}
                {/* <article className="portfolio_item">
                    <div className="portfolio_item-image"></div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-btn">
                        <a href="https://github.com/Linshengyi-William/Android-OpenWeather-App" className='btn btn-primary'>Github</a> */}
                        {/* <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
                    {/* </div> */}
                {/* </article> */}
            </div>
        </section>
    )
}

export default Portfolio
