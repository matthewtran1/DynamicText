
//Create rounded box that the text is animated in

//Box is responsive using rem or %

import { useEffect } from "react";
import PropTypes from 'prop-types'; 
import anime from 'animejs/lib/anime.es.js';

const DrawTextBox = () => {

  
 
  //Check which animation style is selected
 

    return (
      <div className=" flex items-center justify-center w-full h-96 rounded-lg border-2 border-indigo-500">

        <p id="animateText" className=""></p>

      </div>
    )
  }

  export default DrawTextBox