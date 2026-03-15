import React from "react";

export default function GuestModal({ showGuestModal, adults , children }) {
  console.log('from GuestModal, showGuestModal: ' , showGuestModal);
  return (
    <div className={`p-4 bg-white absolute bottom-2
                ${showGuestModal? 'visible ': 'invisible'}`}>
      <h2>GuestModal</h2>
      <div >
        <button>-</button><span>{adults} adults</span><button>+</button>
      </div>
       <div >
        <button>-</button><span>{children} children</span><button>+</button>
      </div>
    </div>
  );
}
