import { useState } from "react";
import Toggle from "./Toggle";
import './index.css'
function App() {
  const [bgColor,setBgColor] = useState('bg-body-color')
  return (
    <div className={`display ${bgColor}`} >
      <Toggle color={"BLUE"} setBgColor={setBgColor}/>
      <Toggle color={"GREEN"} setBgColor={setBgColor}/>
      <Toggle color={"YELLOW"} setBgColor={setBgColor}/>
      <Toggle color={"RED"} setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
