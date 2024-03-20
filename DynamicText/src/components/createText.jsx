
//draw text
//button: Animate



const createText = () => {
  
    const animateText = () => {

      let inputTextElement = document.getElementById("inputText").value;
      console.log(inputTextElement);
    
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