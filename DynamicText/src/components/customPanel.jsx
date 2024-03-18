
//Create panel that allows me customization
//Color
//Font
//Animation Styles
import { useState } from "react";

const customPanel = () => {

    const [value, setValue] = useState("font-size");
      function handleChange(e) {
          setValue(e.target.value);
    }

    const [fontstyleValue, setfontstyleValue] = useState("font-style");
    function handleChange(e) {
        setfontstyleValue(e.target.value);
    }
    const [colorValue, setcolorValue] = useState("color");
    function handleChange(e) {
        setcolorValue(e.target.value);
    }
    const [animationValue, setanimationValue] = useState("animation");
    function handleChange(e) {
        setanimationValue(e.target.value);
    }

    return (

      <>

        
        <div className="flex">

          {/* Font Size*/}
          
          <select value={value} onChange={handleChange} className="text-center border-2 border-indigo-500 font-medium rounded-lg mr-2">
              <option value={"font-size"}>Font-Size</option>
              <option value={"text-xs"}>12px</option>
              <option value={"text-sm"}>14px</option>
              <option value={"text-base"}>16px</option>
              <option value={"text-lg"}>18px</option>
              <option value={"text-xl"}>20px</option>
              <option value={"text-2xl"}>24px</option>
              <option value={"text-3xl"}>30px</option>
              <option value={"text-4xl"}>36px</option>
              <option value={"text-5xl"}>48px</option>
              <option value={"text-6xl"}>60px</option>
              <option value={"text-7xl"}>72px</option>
              <option value={"text-8xl"}>96px</option>
              <option value={"text-9xl"}>128px</option>
              
          </select>
            

          {/* Font Style*/}
          <select value={fontstyleValue} onChange={handleChange} className="text-center border-2 border-indigo-500 font-medium rounded-lg mx-2">
              <option value={"font-style"}>Font-Style</option>
              <option value={"font-sans"}>Font-sans</option>
              <option value={"font-serif"}>Font-serif</option>
              <option value={"font-mono"}>Font-mono</option>
            </select>

          
          {/* Color */}
     
          <select value={colorValue} onChange={handleChange} className="text-center border-2 border-indigo-500 font-medium rounded-lg mx-2">
              <option value={"color"}>Color</option>
              <option value={"text-red"}>Red</option>
              <option value={"text-orange"}>Orange</option>
              <option value={"text-yellow"}>Yellow</option>
              <option value={"text-green"}>Green</option>
              <option value={"text-cyan"}>Cyan</option>
              <option value={"text-blue"}>Blue</option>
              <option value={"text-indigo"}>Indigo</option>
              <option value={"text-violet"}>Violet</option>
              <option value={"text-purple"}>Purple</option>
              <option value={"text-pink"}>Pink</option>
             
            </select>

        {/* Animation Style */}
          <select value={animationValue} onChange={handleChange} className="text-center border-2 border-indigo-500 font-medium rounded-lg mx-2">
              <option value={"animationStyle"}>Animation Style</option>
              
          </select>


        </div>

      </>
    )
  }
  
  export default customPanel