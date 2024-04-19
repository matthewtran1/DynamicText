
//Create Export button
import PropTypes from 'prop-types';
import GIF from 'gif.js';
import {useState} from 'react'

const ExportText = ({ animationFrames }) => {
  
  //Set state for exporting
  const [isExporting, setIsExporting] = useState(false);

  console.log("Frames received in ExportText:", animationFrames);

  const exportGif = () => {
    console.log('Exporting GIF...');
    //Start exporting process
    setIsExporting(true);

    const gif = new GIF({
      workers: 2,
      quality: 10,
      repeat: 0   //loop indefinitely 
    });

   
    //Set width and height for each frame
    const frameWidth = document.getElementById("textBoxID").offsetWidth;
    const frameHeight = document.getElementById("textBoxID").offsetHeight;

    //Create canvas element and set its dimensions
    const canvas = document.createElement('canvas');
    canvas.width = frameWidth;
    canvas.height = frameHeight;
    const ctx = canvas.getContext('2d');

    //Create new image for each frame and add it to the gif animation
    animationFrames.forEach(frame => {
      const img = new Image();
      console.log("Image URL:", frame);
      img.src = frame;
  
      //Draw image onto canvas
 
      img.onload = () => {
        ctx.clearRect(0, 0, frameWidth, frameHeight);
        ctx.drawImage(img, 0, 0, frameWidth, frameHeight);
        gif.addFrame(canvas, { delay: 16 });
     
     

      };

      //image error handling
      img.onerror = () => {
        console.error('Error loading image:', frame, img.src);
      };

    });
    

    gif.on('finished', function(blob) {
      console.log('GIF export finished.');
      //Download the GIF
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'animation.gif';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setIsExporting(false);

    });

    //Handling error
    gif.on('error', function(err) {
      console.error('GIF creation error:', err);
      setIsExporting(false);
      
    });

    gif.render();
  }

  return (
    <div>
      
      <button 
      onClick={exportGif}
      disabled={isExporting}
      className="text-white bg-slate-500 hover:bg-slate-600 font-medium rounded-lg text-md px-3 py-1.5 ">
        
        Export 

      </button>


    </div>
  )
    
}

ExportText.propTypes = {
  animationFrames: PropTypes.arrayOf(PropTypes.string).isRequired
};

  export default ExportText