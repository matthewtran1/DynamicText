//Documentation 
import { useState } from "react";

const Documentation = () => {

    //Set state for popup
    const [isOpen, setIsOpen] = useState(false);

    //Set state to active if it is not active
    const togglePopup = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div>
        <button className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-md px-3 py-1.5"
        onClick={togglePopup}>
            Documentation
        </button>
        
        {/* Create pop window */}
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">How to Use</h2>
            <p>Select the desired: 
            
                <li>Font-size</li>
                <li>Font-style</li>
                <li>Color</li>
                <li>Animation Style</li>  
           
                Click the "Animate Text" button
                <br></br>
                Once animated, 
                <br></br>
                Click the "Export" button to download as a gif <br></br>  Share on social media!
                </p>
            <button className="text-sm text-gray-600 hover:text-gray-800" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      </div>
    )
  }

  
  export default Documentation