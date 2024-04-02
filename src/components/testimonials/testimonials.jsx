import React from "react";
import "./testimonials.css";
import TestimonialsArticle from "./testimonialsArticle";

import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Testimonials(){
    return(
        <section id="Testimonials">
            <h2>SWOT Analysis</h2>
           <Swiper className="testimonials_container "
             modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            
            pagination={{ clickable: true }}
            
             
           > 
                <SwiperSlide><TestimonialsArticle title="Strength" point1="persevearence" point2="Grasping power"/></SwiperSlide> 
                <SwiperSlide> <TestimonialsArticle title="Weakness" point1="Overthinker" point2="Procrastination"/></SwiperSlide> 
                <SwiperSlide><TestimonialsArticle title="Oppurtunities" point1="Online Courses" point2="Internship"/></SwiperSlide>  
                <SwiperSlide> <TestimonialsArticle title="Threats" point1="Recession" point2="Competition"/> </SwiperSlide> 
                {/* <div className="swiper_pagination"></div> */}
           </Swiper>
        </section>
    )   
}
export default Testimonials