
import './App.css';
import { CreateText, ExportText, InputText, CustomPanel, DrawTextBox } from './components';

//Increase length of text box
// Make left side of text box line up with left size of textbox
// Move create text button using margins
// Move export button so the end lines up with the end of the box

const App = () => {
  
  return (
    <>
      <h1 className="text-3xl font-bold ">
        Dynamic Text Animation Generator
      </h1>

      <div className="pt-[2.75rem] lg:pt-[3.25rem] overflow-hidden">
        
        <DrawTextBox />
        

        <div className='grid grid-cols-2 my-2'>

          <div className='flex justify-start '>
            <InputText/>
          </div>

          <div className='flex justify-end'>
            <CreateText/>
          </div>

          
          
          
        </div>
        
        <div className='flex justify-end'>
            <ExportText/>
          </div>
        
        <CustomPanel/>
        
      </div>

    </>
  )
};

export default App
