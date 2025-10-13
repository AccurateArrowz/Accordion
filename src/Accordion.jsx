import { useState, useEffect } from "react";
import Panel from "./Panel";

export default function Accordion({data}) {
  const [panels, setPanels] = useState(() =>data.map(item => ({...item, open: false})));
  const [multiEnabled, setMultiEnabled] = useState(false);

  function handleClick(panel){
    if(!multiEnabled){
     setPanels(panels.map(indivPanel => indivPanel.id=== panel.id? {...indivPanel, open: !indivPanel.open} : {...indivPanel, open:false}))
    }
    else{
      setPanels(panels.map(indivPanel => indivPanel.id === panel.id? {...indivPanel, open: !indivPanel.open}: indivPanel))
    }

  }
  console.log(panels);
  
  return (
    <div className='w-[40%]'>
      <label htmlFor="myCheck">
        Allow MultiSelect {'  '}
        <input
          type="checkbox"
          name=""
          id="myCheck"
          checked={multiEnabled}
          onChange={()=> setMultiEnabled(multiEnabled => !multiEnabled) }
        />
      </label>
      <ul >
        {panels.length > 0 ? (
    panels.map((panel) => (
      <Panel
        key={panel.id}
        panel={panel}
        handleClick={handleClick}
      />
    ))
  ) : (
    <li className="text-gray-500 italic">Loading Panels</li>
  )}
      </ul>
    </div>
  );
}
