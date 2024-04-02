import React from "react";
function ArticleComponent(props){
    return(
        <article className="portfolio_items">
            <div className="portfolio_item_image">
                <img src={props.img} />
            </div>
            <h3>{props.title}</h3>
            <div className="portfolio_item_cta">
                <a href={props.gitLink} target="_blank" className="btn">Github</a>
                <a href={props.demoLink} target="_blank" className="btn btn-primary">Live Demo</a>
            </div>
    </article>
    )
}
export default ArticleComponent