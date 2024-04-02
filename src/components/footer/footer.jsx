import React from "react";
import "./footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer(){
    return(
        <footer>
            <a href="#" className="footer_logo">R Varun</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Portfolio</a></li>
                <li><a href="#Testimonials">Swot Analysis</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://instagram.com" target="_blank"><FaInstagramSquare /></a>
                <a href="https://whatsapp.com" target="_blank"><FaWhatsapp /></a>

            </div>
            <div className="footer_copyright">
                <small>&copy; Varun. All rights reserved.</small>
            </div>
        </footer>
    )   
}
export default Footer