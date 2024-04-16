
import './App.css';
import { CreateText, ExportText, InputText, DrawTextBox, Documentation } from './components';
import { useState } from "react";

const App = () => {

  //Handle animation frames state
  const [animationFrames, setAnimationFrames] = useState([]);
  
  /* Set initial values of customization panels */
  const initialValues = {

    fontsize: "",
    fontStyle: "",
    color: "",
    animationStyle: ""

  };

  /* Handles input changes to the customization panel  */
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const {name, value} = e.target;
      setValues({...values,
      [name]: value});
  }
    
  return (
    <>
      
      <div className="overflow-hidden">

        <h1 className="text-3xl font-bold text-slate-500 my-2">
          Dynamic Text Animation Generator
        </h1>

        {/* Create Documentation button */}
        <div className='flex mb-2'>
          <Documentation/>
        </div>

        {/* Render text box and pass selection values to each component*/}

        <DrawTextBox 
        
        animationStyle={values.animationStyle}  />
        
        {/* Render input text box and Animate Text button 
          Pass selection values to each component*/}
        <div className='grid grid-cols-2 my-2'>

          <div className='flex justify-start '>
            <InputText selectedValues = {values}/>
          </div>

          <div className='flex justify-end'>
            <CreateText selectedValues={values}
            setAnimationFrames={setAnimationFrames}
           />
          </div>
          
        </div>

        {/* Create Custom Panel*/}
        <div className='grid grid-cols-2 my-2'>
          <div className='flex justify-start '>
            <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2">

              {/* Font Size*/}

              <select value={values.fontsize} 
                onChange={handleChange} 
                name="fontsize"
                className="text-center border-2 border-slate-500 font-medium rounded-lg py-1">

                  <option defaultValue={""}>Font-Size</option>
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

              <select value={values.fontStyle} 
                onChange={handleChange} 
                name="fontStyle"
                className="text-center border-2 border-slate-500 font-medium rounded-lg py-1">
                  <option defaultValue={""}>Font-Style</option>
                  <option value={"normal"}>Normal</option>
                  <option value={"italic"}>Italic</option>
                  <option value={"font-bold"}>Bold</option>
                  <option value={"font-serif"}>Font-serif</option>
                  <option value={"font-mono"}>Font-mono</option>
                </select>


              {/* Color */}

              <select value={values.color} 
              onChange={handleChange} 
              name="color"
              className="text-center border-2 border-slate-500 font-medium rounded-lg py-1">
                  <option defaultValue={""}>Color</option>
                  <option value={"text-red-500"}>Red</option>
                  <option value={"text-gray-500"}>Gray</option>
                  <option value={"text-orange-500"}>Orange</option>
                  <option value={"text-yellow-500"}>Yellow</option>
                  <option value={"text-green-500"}>Green</option>
                  <option value={"text-cyan-500"}>Cyan</option>
                  <option value={"text-blue-500"}>Blue</option>
                  <option value={"text-indigo-500"}>Indigo</option>
                  <option value={"text-violet-500"}>Violet</option>
                  <option value={"text-purple-500"}>Purple</option>
                  <option value={"text-pink-500"}>Pink</option>
                
                </select>
                

              {/* Animation Style */}

              <select value={values.animationStyle} 
              onChange={handleChange} 
              name="animationStyle"
              className="text-center border-2 border-slate-500 font-medium rounded-lg py-1">
                  <option defaultValue={""}>Animation Style</option>
                  <option value={"fadein"}>Fade In</option>
                  <option value={"fadeup"}>Fade Up</option>
                  <option value={"fadedown"}>Fade Down</option>
                  <option value={"fadeleft"}>Fade Left</option>
                  <option value={"faderight"}>Fade Right</option>
                  <option value={"rotateCW"}>Rotate CW</option>
                  <option value={"rotateCCW"}>Rotate CCW</option>
                  <option value={"flip"}>Flip</option>
                  <option value={"returnR"}>Return Right</option>
                  <option value={"returnL"}>Return Left</option>
  
          
              </select>
            </div>
          </div>

          {/* Create Export button*/}
          <div className='flex justify-end'>
            <ExportText animationFrames={animationFrames}/>
          </div>
        
        
        </div>
      </div>

    </>
  )
};

export default App
