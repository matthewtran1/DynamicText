
//Creates the animated text and displays it into the text box
//Applies the options selected

import PropTypes from 'prop-types';
import {useState, useEffect, useRef} from "react";
import anime from 'animejs/lib/anime.es.js';



const CreateText = ({ selectedValues}) => {


  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = () => {

    if (isAnimating) return; // Prevent multiple clicks while animation is in progress
    setIsAnimating(true); // Set animation to true

    // Get the value in the input text box 
    const inputTextElement = document.getElementById("inputText").value;
  
    console.log(inputTextElement);
    let classes = "";

    // Add the selected value to the variable that holds the classes 
    if (selectedValues.fontsize) classes += ` ${selectedValues.fontsize}`;
    if (selectedValues.fontStyle) classes += ` ${selectedValues.fontStyle}`;
    if (selectedValues.color) classes += ` ${selectedValues.color}`;

    // Print input text into the drawBox 
      
    document.getElementById("animateText").innerText = inputTextElement;
    document.getElementById("animateText").className = classes.trim();

    // Reset rotation to 0 degrees to be able animate text again 
    document.getElementById("animateText").style.transform = "rotate(0deg)";

    //Reset animation element

    anime.remove('#animateText');

    // Set animation to false once animation is completed
    const onAnimationComplete = () => {
      setIsAnimating(false); 
    };

    //Animation constants
    let animationConst = {
      targets: '#animateText',
      duration: 2000,
      easing: 'easeInOutQuad',
      complete: onAnimationComplete
    };

    //Animation styles
    switch (selectedValues.animationStyle) {
        case "fadein":
            animationConst.opacity = [0,1]
            break;
        case "fadeup":
            animationConst.translateY = ['100%', '0%'];
            animationConst.opacity = [0,1]
            break;
        case "fadedown":
            animationConst.opacity = [0,1]
            animationConst.translateY = ['-100%', '0%'];
            break;
        case "fadeleft":
          animationConst.opacity = [0,1]
          animationConst.translateX = ['100%', '0%'];
          break;
        case "faderight":
          animationConst.opacity = [0,1]
          animationConst.translateX = ['-100%', '0%'];
            break;
        case "rotateCW":
            animationConst.rotate = '360deg';
            animationConst.easing = 'linear';
            break;
        case "rotateCCW":
            animationConst.rotate = '-360deg';
            animationConst.easing = 'linear';
            break;
        case "flip":
            animationConst.rotateY = [0, 360];
            break;
        case "returnR":
            animationConst.translateX = [0, 100];
            animationConst.duration = 1200;
            animationConst.direction = 'alternate';
            break;
        case "returnL":
            animationConst.translateX = [0, -100];
            animationConst.duration = 1200;
            animationConst.direction = 'alternate';
            break;
        default:
            break;
    }

    //Pass the constants to the anime function to set base properties
    anime(animationConst);
    console.log(selectedValues.fontsize, selectedValues.fontStyle, selectedValues.color, selectedValues.animationStyle)

  };

    
  


    return (
      
      <>

        <button 
        onClick = {animateText} 
        disabled={isAnimating}
        className="text-white bg-slate-500 hover:bg-slate-600 font-medium rounded-lg text-md px-3 py-1.5">

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