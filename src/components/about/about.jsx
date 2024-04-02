import React from "react";
import "./about.css"
import me from "../../assets/photo.jpg"
import { BsAwardFill } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
function About(){
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={me} alt="about_me_image"/>
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <BsAwardFill className="about_icon"/>
                            <h5>Experience</h5>
                            <small>5 Months as a FullStack Developer Intern</small>
                        </article>
                        <article className="about_card">
                            <BsFiles className="about_icon"/>
                            <h5>Projects</h5>
                            <small>Completed 10+ projects</small>
                        </article>
                        <article className="about_card">
                            <TbWorld className="about_icon"/>
                            <h5>Hobbies</h5>
                            <small>Web development and watching cricket</small>
                        </article>
                        <article className="about_card">
                            <FaUserGraduate className="about_icon"/>
                            <h5>Education</h5>
                            <small>ECE student at SRM Ramapuram</small>
                        </article>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )   
}
export default About