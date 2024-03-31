
//draw text
//button: Animate

import PropTypes from 'prop-types';
import {useState} from "react";
import anime from 'animejs/lib/anime.es.js';

const CreateText = ({ selectedValues }) => {

    const [isAnimating, setIsAnimating] = useState(false);

    const animateText = () => {
      
      {/* Get the value in the input text box */}
      const inputTextElement = document.getElementById("inputText").value;
      console.log(inputTextElement);
      let classes = "";

      {/* Add the selected value to the variable that holds the classes */}
      if (selectedValues.fontsize) classes += ` ${selectedValues.fontsize}`;
      if (selectedValues.fontStyle) classes += ` ${selectedValues.fontStyle}`;
      if (selectedValues.color) classes += ` ${selectedValues.color}`;

       {/* Print input text into the drawBox */}
      document.getElementById("animateText").innerText = inputTextElement;

    
      document.getElementById("animateText").className = classes.trim();

      // Fade in Animation
      if (selectedValues.animationStyle === "fadein") {
        setIsAnimating(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            duration: 2000, // Adjust duration as needed
            easing: 'easeInOutQuad',
            complete: () => setIsAnimating(false)
        });
      }

      // Fade up animation
      if (selectedValues.animationStyle === "fadeup") {
        setIsAnimating(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, // Adjust duration as needed
            complete: () => setIsAnimating(false)
        });
      }
      
      // Fade down animation
      if (selectedValues.animationStyle === "fadedown") {
        setIsAnimating(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, // Adjust duration as needed
            complete: () => setIsAnimating(false)
        });
      }
      
      // Fade left animation
      if (selectedValues.animationStyle === "fadeleft") {
        setIsAnimating(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, // Adjust duration as needed
            complete: () => setIsAnimating(false)
        });
      }

      // Fade right animation
      if (selectedValues.animationStyle === "faderight") {
        setIsAnimating(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, // Adjust duration as needed
            complete: () => setIsAnimating(false)
        });
      }
    }
   
  
    return (
      
      <>

        <button 
        
        onClick = {animateText} 
        className="text-white bg-indigo-500 hover:bg-indigo-600  font-medium rounded-lg text-md px-3 py-1.5">

          Animate Text

        </button>
        <p id= "animateText" className={isAnimating ? "fade-in" : ""}></p>
     
      </>
      
    )
  }

  CreateText.propTypes = {
    selectedValues: PropTypes.shape({
      fontsize: PropTypes.string,
      fontStyle: PropTypes.string,
      color: PropTypes.string,
      animationStyle: PropTypes.string
    }).isRequired
  };
  
  export default CreateText