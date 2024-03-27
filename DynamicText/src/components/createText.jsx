
//draw text
//button: Animate



const createText = ({selectedValues}) => {
    console.log(selectedValues);
    
    
    const animateText = () => {
      if (!selectedValues) {
        console.error("selectedValues is undefined");
        return;
      }
      const inputTextElement = document.getElementById("inputText").value;
  
      console.log(inputTextElement);
      
      const { fontsize, fontStyle, color } = selectedValues;

      console.log("Font Size:", fontsize);
      console.log("Font Style:", fontStyle);
      console.log("Color:", color);
      {/* Print input text into the drawBox */}
      document.getElementById("animateText").innerText = inputTextElement;
    
    }
   
    return (
      
      <>

        <button 
        
        onClick = {animateText} 
        className="text-white bg-indigo-500 hover:bg-indigo-600  font-medium rounded-lg text-md px-3 py-1.5">

          Animate Text

        </button>


      </>
      
    )
  }
  
  export default createText