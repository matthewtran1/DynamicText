
//Create Export button

import GIF from 'gif.js'

const ExportText = () => {

  const exportAnimationAsGIF = () => {
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 400,
      height: 200,
      workerScript: 'js/gif.worker.js' // Make sure to provide the path to gif.worker.js file
    });

    //Capture frames of the animation
    const frames = document.querySelectorAll('.animation-frame');

    frames.forEach((frame, index) => {
      gif.addFrame(frame, { copy: true, delay: 200 }); // You can adjust delay as needed
    });

    // Render GIF
    gif.on('finished', function(blob) {

      try {
        const url = URL.createObjectURL(blob);
        if (url) {
          console.log("Generated GIF URL:", url);
          window.open(url, '_blank'); // Open the URL in a new window/tab
        } else {
          console.error("Failed to generate GIF URL.");
        }
      } catch (error) {
        console.error("Error generating GIF URL:", error);
      }
    });
    
    console.log("gif rendering")
    gif.render();
  };

  return (
    <div>

      <button 
      onClick={exportAnimationAsGIF}
      className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-md px-3 py-1.5 ">

        Export 

      </button>


    </div>
  )
    
  }
  
  export default ExportText