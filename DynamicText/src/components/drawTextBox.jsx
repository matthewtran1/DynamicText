
//Create rounded box that the text is animated in

//Box is responsive using rem or %

const drawTextBox = () => {
  
    return (
      <div className=" flex items-center justify-center w-full h-96 rounded-lg border-2 border-indigo-500">

        <p id="animateText" className="font-medium"></p>

      </div>
    )
  }
  
  export default drawTextBox