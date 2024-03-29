
//draw text
//button: Animate



const CreateText = () => {
 
    
    
    const animateText = () => {
      
      const inputTextElement = document.getElementById("inputText").value;
      console.log(inputTextElement);
      
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
  
  export default CreateText