import React from "react";
import "./services.css";
import ArticleComponent from "../portfolio/article_component";
import img1 from "../../assets/youtube_clone.png";
import img2 from "../../assets/to_do_list.png";
import img3 from "../../assets/notes.png";
import img4 from "../../assets/drum_kit.png"
function Service(){
    return(

        <section id="service">
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
               <ArticleComponent title="Todo list" img={img2} gitLink="https://github.com/whitedevil1233rrffrfrrferf/keeper_app" demoLink="https://todolistsit.netlify.app" />
               <ArticleComponent title="Youtube_clone" img={img1} gitLink="https://github.com/whitedevil1233rrffrfrrferf/Youtube-clone" demoLink="https://youtube2-clone.netlify.app" />
               <ArticleComponent title="Note_pad" img={img3} gitLink="https://github.com/whitedevil1233rrffrfrrferf/to-do-list" demoLink="https://todolistsit.netlify.app" />
               <ArticleComponent title="drum_kit" img={img4} gitLink="https://github.com/whitedevil1233rrffrfrrferf/drumkit" demoLink="https://whitedevil1233rrffrfrrferf.github.io/drumkit/" />
            </div>
        </section>
    )   
}
export default Service