import React from "react";
import "./header.css"
import CTA from "./CTA";
import me from "../../assets/photo_about.jpg"
import HeaderSocials from "./HeaderSocials";
function Header(){
    return(
        <header id="home">
            <div className="container header_container">
                <h5>Hello I am </h5>
                <h5>R varun</h5>
                <h5 className="text-light">FullStack developer</h5>
                <CTA />
                <HeaderSocials />
                <a href="#contact" className='scroll_down'>Scroll Down</a>
                <div className="me">
                <img src={me} alt="varun"/>
            </div>
            
            
        </div>
        </header>
    )   
}
export default Header