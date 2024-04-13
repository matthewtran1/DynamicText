
//Creates the animated text and displays it into the text box
//Applies the options selected

import PropTypes from 'prop-types';
import {useState, useEffect, useRef} from "react";
import anime from 'animejs/lib/anime.es.js';



const CreateText = ({ selectedValues}) => {



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
       {/* 
      document.getElementById("animateText").innerText = inputTextElement;
      document.getElementById("animateText").className = classes.trim();

      // Reset rotation to 0 degrees to be able animate text again 
      document.getElementById("animateText").style.transform = "rotate(0deg)";
*/}
      //Reset animation element
      anime.remove('#animateText');

      // Fade in Animation
      if (selectedValues.animationStyle === "fadein") {
  
        anime({
            targets: '#animateText',                    //Specifiy the element to be animated
            opacity: [0, 1],                            //Opacity: defines the start and end of fade
            duration: 2000,                             //Duration of animation in milliseconds
            easing: 'easeInOutQuad',                    //Starts slowly, speeds up in the middle and then slows down again
           
            
        });
      }

      // Fade up animation
      else if (selectedValues.animationStyle === "fadeup") {

        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['100%', '0%'],                 //direction of animation
            easing: 'easeInOutQuad',
            duration: 1500, 
            
    
        });
      }
      
      // Fade down animation
      else if (selectedValues.animationStyle === "fadedown") {
    
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateY: ['-100%', '0%'],            
            easing: 'easeInOutQuad',
            duration: 1500, 
          
       
        });
      }
      
      // Fade left animation
      else if (selectedValues.animationStyle === "fadeleft") {
   
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, 
           
           
        });
      }

      // Fade right animation
      else if (selectedValues.animationStyle === "faderight") {
   
        anime({
            targets: '#animateText',
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1500, 
           
       
        });
      }
      // Rotate cw animation
      else if (selectedValues.animationStyle === "rotateCW") {
    
        anime({
            targets: '#animateText',
            rotate: '360deg',
            easing: 'linear',
            duration: 2000, 
        
            
        });
      }

      // Rotate ccw animation
      else if (selectedValues.animationStyle === "rotateCCW") {
      
        anime({
            targets: '#animateText',
            rotate: '-360deg',
            easing: 'linear',
            duration: 2000, 
            
           
        });
      }

      //flip animation
      else if (selectedValues.animationStyle === "flip") {

        anime({
          targets: '#animateText',
          rotateY: [0, 360], 
          easing: 'easeInOutQuad',
          duration: 2000,
         

        });
      }

      //return right animation
      else if (selectedValues.animationStyle === "returnR")
      {
        
        anime({
          targets: '#animateText',
          translateX: [0, 100], 
          delay: 500,
          direction: 'alternate',
       
   
        });

      }

      //return left animation
      else if (selectedValues.animationStyle === "returnL")
      {
    
        anime({
          targets: '#animateText',
          translateX: [0, -100], 
          delay: 500,
          direction: 'alternate',
         
        });

      }
      console.log(selectedValues.fontsize, selectedValues.fontStyle, selectedValues.color, selectedValues.animationStyle)
    }


    return (
      
      <>

        <button 
        onClick = {animateText} 
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