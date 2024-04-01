
//draw text
//button: Animate

import PropTypes from 'prop-types';
import {useState} from "react";
import anime from 'animejs/lib/anime.es.js';

const CreateText = ({ selectedValues }) => {

    const [animatingStyle, setanimatingStyle] = useState(false);

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
        setanimatingStyle(true);                        //update state to true upon selection
        anime({
            targets: '#animateText',                    //Specifiy the element to be animated
            opacity: [0, 1],                            //Opacity: defines the start and end of fade
            duration: 2000,                             //Duration of animation in milliseconds
            easing: 'easeInOutQuad',                    //Starts slowly, speeds up in the middle and then slows down again
            complete: () => setanimatingStyle(false)    //After completion, set to false
        });
      }

      // Fade up animation
      if (selectedValues.animationStyle === "fadeup") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['100%', '0%'],                 //direction of animation
            easing: 'easeInOutQuad',
            duration: 1500, 
            complete: () => setanimatingStyle(false)
        });
      }
      
      // Fade down animation
      if (selectedValues.animationStyle === "fadedown") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['-100%', '0%'],            
            easing: 'easeInOutQuad',
            duration: 1500, 
            complete: () => setanimatingStyle(false)
        });
      }
      
      // Fade left animation
      if (selectedValues.animationStyle === "fadeleft") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, 
            complete: () => setanimatingStyle(false)
        });
      }

      // Fade right animation
      if (selectedValues.animationStyle === "faderight") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, 
            complete: () => setanimatingStyle(false)
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
        <p id= "animateText" className={animatingStyle ? "fade-in" : ""}></p>
     
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