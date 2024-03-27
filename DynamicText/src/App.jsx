
import './App.css';
import { CreateText, ExportText, InputText, CustomPanel, DrawTextBox } from './components';
import { useState } from "react";
import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';
//Increase length of text box
// Make left side of text box line up with left size of textbox
// Move create text button using margins
// Move export button so the end lines up with the end of the box

const App = () => {

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
    
    /* Animation Options */
    const FadingText = () => {
      useEffect(() => {
        anime({
          targets: '.text',
          opacity: 1,
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }, []);
    };
  

  return (
    <>
      <h1 className="text-3xl font-bold text-indigo-500 ">
        Dynamic Text Animation Generator
      </h1>

      <div className="pt-[1.75rem] lg:pt-[3.25rem] overflow-hidden">
        
        <DrawTextBox />
        

        <div className='grid grid-cols-2 my-2'>

          <div className='flex justify-start '>
            <InputText selectedValues = {values}/>
          </div>

          <div className='flex justify-end'>
            <CreateText/>
          </div>
          
        </div>

        <div className='grid grid-cols-2 my-2'>
          <div className='flex justify-start '>
            <div className="grid grid-cols-4 gap-4 ">

              {/* Font Size*/}

              <select value={values.fontsize} 
                onChange={handleChange} 
                name="fontsize"
                className="text-center border-2 border-indigo-500 font-medium rounded-lg py-1">

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
                className="text-center border-2 border-indigo-500 font-medium rounded-lg ">
                  <option defaultValue={""}>Font-Style</option>
                  <option value={"normal"}>Normal</option>
                  <option value={"italic"}>Italic</option>
                  <option value={"bold"}>Bold</option>
                </select>


              {/* Color */}

              <select value={values.color} 
              onChange={handleChange} 
              name="color"
              className="text-center border-2 border-indigo-500 font-medium rounded-lg ">
                  <option defaultValue={""}>Color</option>
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

              <select value={values.animationStyle} 
              onChange={handleChange} 
              name="animationStyle"
              className="text-center border-2 border-indigo-500 font-medium rounded-lg ">
                  <option defaultValue={""}>Animation Style</option>
                  <option value={"fading"}>Fading Text</option>
                  <option value={"typewriter"}>Typewriter</option>
              </select>
              <div>
                {/* Check if the option selected and if it is, call the fading text component*/}
                
                {values.animationStyle === 'fading' && <FadingText />}
              </div>



  </div>
          </div>

          <div className='flex justify-end'>
            <ExportText/>
          </div>
        
        
        </div>
      </div>

    </>
  )
};

export default App
