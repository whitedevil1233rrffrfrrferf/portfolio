import React from "react";
function TestimonialsArticle(props){
    return(
        <article className="testimonial">
                <h2>{props.title}</h2>
                <ul>
                  <li className="point">{props.point1}</li>  
                  <li className="point">{props.point2}</li>
                </ul>
            </article>
    )
}
export default TestimonialsArticle