import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function HeaderSocials(){
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/" target="__blank"><FaLinkedin /></a>
            <a href="https://www.github.com/" target="__blank"><FaGithub /></a>
            <a href="https://www.instagram.com/" target="__blank"><FaInstagramSquare /></a>
        </div>
    )
}
export default HeaderSocials