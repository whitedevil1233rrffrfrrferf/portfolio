import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience(){
    return(
        <section id="experience">
            <h5>My Skills</h5>
            <h2>My experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    
                        <article className="experience_details">
                        <BsFillPatchCheckFill />
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                        <BsFillPatchCheckFill />
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                        <BsFillPatchCheckFill />
                        <h4>Javascript</h4>
                        <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience_details">
                        <BsFillPatchCheckFill />
                        <h4>React js</h4>
                        <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience_details">
                        <BsFillPatchCheckFill />
                        <h4>Next js</h4>
                        <small className="text-light">Beginner</small>
                        </article>
                    
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                        
                            <article className="experience_details">
                            <BsFillPatchCheckFill />
                            <h4>Express js</h4>
                            <small className="text-light">Intermediate</small>
                            </article>
                            <article className="experience_details">
                            <BsFillPatchCheckFill />
                            <h4>MongoDB</h4>
                            <small className="text-light">Beginner</small>
                            </article>
                            <article className="experience_details">
                            <BsFillPatchCheckFill />
                            <h4>SQL</h4>
                            <small className="text-light">Intermediate</small>
                            </article>
                            <article className="experience_details">
                            <BsFillPatchCheckFill />
                            <h4>Flask</h4>
                            <small className="text-light">Intermediate</small>
                            </article>
                            
                        
                    </div>
            </div>
        </section>
    )   
}
export default Experience