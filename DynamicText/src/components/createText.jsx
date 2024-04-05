
//Creates the animated text and displays it into the text box
//Applies the options selected

import PropTypes from 'prop-types';
import {useState, useEffect, useRef} from "react";
import anime from 'animejs/lib/anime.es.js';
import GIF from 'gif.js'


const CreateText = ({ selectedValues}) => {

    const [animatingStyle, setanimatingStyle] = useState(false)

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

      // Reset rotation to 0 degrees to be able animate text again 
      document.getElementById("animateText").style.transform = "rotate(0deg)";

      //Reset animation element
      anime.remove('#animateText');

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
      else if (selectedValues.animationStyle === "fadeup") {
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
      else if (selectedValues.animationStyle === "fadedown") {
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
      else if (selectedValues.animationStyle === "fadeleft") {
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
      else if (selectedValues.animationStyle === "faderight") {
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


      // Rotate cw animation
      else if (selectedValues.animationStyle === "rotateCW") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            rotate: '360deg',
            easing: 'linear',
            duration: 2000, 
        
            complete: () => setanimatingStyle(false)
        });
      }

      // Rotate ccw animation
      else if (selectedValues.animationStyle === "rotateCCW") {
        setanimatingStyle(true);
        anime({
            targets: '#animateText',
            rotate: '-360deg',
            easing: 'linear',
            duration: 2000, 
            
            complete: () => setanimatingStyle(false)
        });
      }

      //flip animation
      else if (selectedValues.animationStyle === "flip") {
        setanimatingStyle(true);
        anime({
          targets: '#animateText',
          rotateY: [0, 360], 
          easing: 'easeInOutQuad',
          duration: 2000,
         
          complete: () => setanimatingStyle(false)
        });
      }

      //return right animation
      else if (selectedValues.animationStyle === "returnR")
      {
        setanimatingStyle(true);
        anime({
          targets: '#animateText',
          translateX: [0, 100], 
          delay: 500,
          direction: 'alternate',
       
          complete: () => setanimatingStyle(false)
        });

      }

      //return left animation
      else if (selectedValues.animationStyle === "returnL")
      {
        setanimatingStyle(true);
        anime({
          targets: '#animateText',
          translateX: [0, -100], 
          delay: 500,
          direction: 'alternate',
          
          complete: () => setanimatingStyle(false)
        });

      }

    }


    return (
      
      <>

        <button 
        onClick = {animateText} 
        className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-md px-3 py-1.5">

          Animate

        </button>      
        
       
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