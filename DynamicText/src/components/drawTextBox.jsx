
//Renders the Text Box where the input text is displayed in
import {useRef, useEffect} from 'react'
import PropTypes from 'prop-types';

const DrawTextBox = () => {

    // <p id="animateText" className=""></p>
    return (
      <div className="flex items-center justify-center w-full h-96 rounded-lg border-2 border-indigo-500 overflow-hidden">
       
       <p id="animateText" className=""></p>
      
      </div>
    )
  }

  
  export default DrawTextBox