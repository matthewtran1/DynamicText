
import './App.css';
import { CreateText, ExportText, InputText, CustomPanel, DrawTextBox } from './components';


const App = () => {
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Dynamic Text Animation Generator
      </h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <div className='flex justify-center'>

          <InputText/>
          <CreateText/>

        </div>
        

        <DrawTextBox />
        
        <ExportText/>
        
        <CustomPanel/>
        
      </div>

    </>
  )
};

export default App
