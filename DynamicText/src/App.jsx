
import './App.css'
import { createText, exportText, inputText, customPanel, drawTextBox } from './components';

function App() {
  
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Dynamic Text Animation Generator
    </h1>

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <drawTextBox />
      
    </div>

    </>
  )
}

export default App
