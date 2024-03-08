
import './App.css';
import { CreateText, ExportText, InputText, CustomPanel, DrawTextBox } from './components';

//Increase length of text box
// Make left side of text box line up with left size of textbox
// Move create text button using margins
// Move export button so the end lines up with the end of the box

const App = () => {
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Dynamic Text Animation Generator
      </h1>

      <div className="pt-[2.75rem] lg:pt-[3.25rem] overflow-hidden">

        
        
        <div className='flex justify-center'>
          <DrawTextBox />
        </div>

        <div className='flex my-2'>

          <InputText/>

          <CreateText/>

          <ExportText/>
          
        </div>
        

        
        <CustomPanel/>
        
      </div>

    </>
  )
};

export default App
