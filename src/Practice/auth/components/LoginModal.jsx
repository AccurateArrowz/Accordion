import React, { forwardRef, useEffect, useState } from "react";

export const LoginModal = forwardRef(({ onClose, showLoginModal }, ref) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    console.log("from loginModal, showLoginModal = ", showLoginModal);
    if (showLoginModal) ref.current.showModal();
    else if (ref.current) {
      ref.current.close();
    }
  }, [showLoginModal]);

  return (
    <dialog type="modal" ref={ref} className="w-[300px] h-40 bg-amber-200">
      <button onClick={onClose}>Close Modal</button>
      <form action="">
        <h2>Form</h2>
        <label htmlFor="">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </dialog>
  );
});
