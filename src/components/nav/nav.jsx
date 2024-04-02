import React from "react";
import "./nav.css";
import { MdHome } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
function Nav(){
    const [activeNav,setActiveNav]=useState("")
    return(
        <nav>
            <a href="#home" title="Home" onClick={()=>{setActiveNav("#home")}} className={activeNav==="#home" ? "active" : ""}><MdHome /></a>
            <a href="#about" title="About" onClick={()=>{setActiveNav("#about")}} className={activeNav==="#about" ? "active" :""}><FaRegCircleUser /></a>
            <a href="#experience" title="Experience" onClick={()=>{setActiveNav("#experience")}} className={activeNav==="#experience" ? "active" :""}><FaAddressBook /></a>
            <a href="#service" title="Services" onClick={()=>{setActiveNav("#service")}} className={activeNav==="#service" ? "active" :""}><MdHomeRepairService /></a>
            <a href="#contact" title="Contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav==="#contact" ? "active" : ""}><IoCall /></a>

        </nav>
    )   
}
export default Nav