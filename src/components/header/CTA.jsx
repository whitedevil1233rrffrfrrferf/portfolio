import React from "react";
import Resume from "../../assets/resume.pdf"

function CTA(){
    return(
        <div className="cta">
            <a href={Resume} download="Varun_resume" className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}
export default CTA