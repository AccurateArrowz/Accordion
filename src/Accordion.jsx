import { useState, useEffect, useMemo, useCallback } from "react";
import Panel from "./Panel";
import React from "react";

const Accordion = React.memo(({data}) => {
  const [panels, setPanels] = useState(() =>data.map(item => ({...item, open: false})));
  const [multiEnabled, setMultiEnabled] = useState(false);

  const handleClick = (panel) => {
    console.log('panelClicked', panel)
    if(!multiEnabled){
     setPanels(panels.map(indivPanel => indivPanel.id=== panel.id? {...indivPanel, open: !indivPanel.open} : {...indivPanel, open:false}))
    }
    else{
      setPanels(panels.map(indivPanel => indivPanel.id === panel.id? {...indivPanel, open: !indivPanel.open}: indivPanel))
    }
  };

  
  return (
    <div className='w-full'>
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
     { panels.map((panel) => (
      <Panel
        key={panel.id}
        panel={panel}
        handleClick={handleClick}
        />
      ))}
      </ul>

    </div>
  )
});

export default Accordion;
