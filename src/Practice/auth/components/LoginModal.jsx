import React, { forwardRef } from 'react'

export const LoginModal = forwardRef(({onClose}, ref)=>{
  return (
    <dialog type='modal' ref ={ref}
        className='w-[300px] h-40 bg-amber-200'>
        <button onClick={onClose}>Close Modal</button>
        <form action="">
        <h2>Form</h2>
            <input type="text" />
        </form>
    </dialog>
  );
}
);