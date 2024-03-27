

//Create input text box
import { useEffect } from "react";
import PropTypes from "prop-types";

const InputText = ({selectedValues}) => {

      useEffect(() => {
        console.log("Received values:", selectedValues);
    }, [selectedValues]);

    return (
      <>
    
        <input id="inputText" 
        type="text" 
        placeholder="Enter Text" 
        className= "border-2 border-indigo-500 font-medium rounded-lg text-center py-1 w-full"/>
        
      </>
    )
  }

  InputText.propTypes = {
    selectedValues: PropTypes.object.isRequired,
  };
  
  export default InputText