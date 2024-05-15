import React, { useState } from "https://esm.sh/react@17.0.2";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorchange = (e)=>setColor(e.target.value) 

  return (
    <>
      <div className="Student">
        <h2>Color Picker</h2>
        <div className="color-display" style={{ backgroundColor: color }}>
            <p>Selected Color: <b>{color}</b></p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={(e)=>handleColorchange(e)} className="selector"/>
      </div>
    </>
  );
};

export default ColorPicker;