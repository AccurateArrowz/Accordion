import React, { useState } from 'react'
import GuestModal from './GuestModal';

export default function HeroForm(){
    const [adults, setAdults] =useState(1);
    const [children, setChildren] = useState(0);
    const [showGuestModal, setShowGuestModal] = useState(false);

    // function adultChange({actionType}){
    //     switch(actionType){
    //         case 'increase': setAdults(adults+1)
    //         case 'decrease': if(adults>0) {setAdults(adults-1)
    //         // default: return;
    //     }
    // }
    //     function childChange({actionType}){
    //     switch(actionType){
    //         case 'increase': setChildren(children+1)
    //         case 'decrease': if(children>0) {setChildren(children-1)
    //             // default: return

    //     }
    // }

  return (
    <form className='relative p-4 bg-amber-300 '>
        <h1>book your hotel</h1>
        <button onClick={()=>setShowGuestModal(prev => !prev)}>
            {adults} adults {children} children ⬇️</button>
        <GuestModal showGuestModal={showGuestModal} adults={adults} children={children}></GuestModal>
            </form>
  )
}
