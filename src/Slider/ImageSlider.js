import { borderRadius, color, positions } from "@mui/system";
import { useState } from "react";

export default function ImageSlider({slides}){
    const [currentIndex , setCurrentIndex] = useState(0);
    

    const containerStyles = {
        width : '500px',
       position : "relative",

    }
    const sliderStyles = {
        width : "100%",
        height :"100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${slides[currentIndex].url})`,
    }
    const slideStyles = {
        width : "100%",
        height :"100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position : 'absolute',
        top : '50%',
        transform : 'translate(0,-50%)',
        left : '32px',
        size : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : "pointer"
    }

    const rightArrowStyles = {
        position : 'absolute',
        top : '50%',
        transform : 'translate(0,-50%)',
        left : '32px',
        size : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : "pointer"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return(
        <div style = {containerStyles}>
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><i class="fa-solid fa-arrow-left"></i></div>
            <div style={rightArrowStyles} onClick={goToNext}><i class="fa-solid fa-arrow-right"></i></div>
               <div style ={slideStyles}>
               </div>
        </div>
        </div>
    );
}