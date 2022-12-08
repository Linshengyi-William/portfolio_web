import React from 'react'
import "./about.css"
import ME from "../../assets/Me-about.jpg"
import {BiAward} from "react-icons/bi"
import {MdOutlineSchool} from 'react-icons/md'
const about = () => {
    
    return (
        <section id='about'>
            <h5> Get To Know Linshengyi</h5>
            <h2>ABout Me</h2>

            <div className= "container about_container">
                {/* <div className= "about_me">
                    <div className= "about_me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div> */}

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <MdOutlineSchool className="about_icon"/>
                            <h5>Education</h5>
                            <small>Oregon State University <br/>B.S. Applied Computer Science<br/></small>
                            <small> 3.84 GPA | 2019 - 2022</small>


                        </article>
                        <article className="about_card">
                            <BiAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>Programmming Tutor<br/>01/2022 - 12/2022<br/></small>
                            <small>Autoparts Agent<br/>04/2021 - 12/2022<br/></small>
                        </article>
                        {/* <article className="about_card">
                            <BiAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>1 Year Working</small>
                        </article> */}
                    </div>
                    <p>
                        During my college years, I studied hard and managed to graduate from OSU within almost 3 years 
                        while maintaining a high GPA and working 2 part-time jobs. The motivation I had was my love for technology and 
                        ambition for becoming good at what I am doing. I have had 3 years+ of experience working and learning 
                        in team environments, designing, integrating, and developing, testing programs. I have numerous 
                        experience in technical writing and Agile management; using Git as the version control and team 
                        collaboration tool while I was serving as the team lead. 
                    </p>
                    <a href="#contact" className="btn btn-primary connect-button"> Let's Connect</a>                        
                </div>
            </div>
            
        </section>

    )
}

export default about
