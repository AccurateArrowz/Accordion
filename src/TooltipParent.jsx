import {useEffect, useRef, useState } from "react"

export default function Parent(){
    const[showTooltip, setShowTooltip] = useState(false);
    const[buttonTop, setButtonTop] =useState(0);
    const[tooltipHeight, setTooltipHeight] =useState(0);

    const buttonRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(()=>{
         const {top} = buttonRef.current?.getBoundingClientRect() || 0; 
         setButtonTop(top);
    }, []);

    useEffect(()=>{
        const tooltip=  tooltipRef.current
        const {height} =tooltip?.getBoundingClientRect() || {height: 0};
        setTooltipHeight(height)
    }, [showTooltip]);

    function handleMouseEnter(){
        setShowTooltip(true);
       console.log('buttonTop: '+ buttonTop)
       console.log('tooltipHeight: '+ tooltipHeight)

        if(tooltipHeight> buttonTop ) {//place below the button
            tooltipRef.current.style.bottom = '15px';   
        }
        else{//place above the button
            tooltipRef.current.style.top= '-6px';
    }
    }

    return <div>
        <button className='relative' ref={buttonRef} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={()=> setShowTooltip(false)}>
            This button has a tooltip</button>
       {showTooltip && 
        <p className={`absolute p-4 text-lg ${showTooltip? 'block': 'hidden'}`} ref={tooltipRef}>
            This button does the work to delete the files</p>
        }   
    </div>
}