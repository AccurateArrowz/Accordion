import './App.css'
import Accordion from './Accordion'
import Parent from './TooltipParent.jsx';
import FoodsPage from './Foods/FoodsPage.jsx'
// import RecurssiveNavPractice from './PracticeRecurrsiveNav/RecurssiveNavPractice.jsx';
import NewNav from './Practice/NewNav.jsx';
import { UserProvider } from './Practice/useUser.jsx'
import { BrowserRouter } from 'react-router-dom'
import Rooms from './Practice/Rooms.tsx'
import { useEffect, useRef, useState, useMemo } from 'react';
import { LoginModal } from './Practice/auth/components/LoginModal.jsx';

function App() {
  const items = useMemo(() => (
    [
      {
        id: 1,
        title: "What is React?",
        content:
          "React is a JavaScript library for building user interfaces. It lets you build reusable UI components and efficiently update them when data changes.",
      },
      {
        id: 2,
        title: "What is an Accordion component?",
        content:
          "An Accordion is a UI pattern that allows users to toggle the visibility of content sections. It's useful for FAQs, menus, and expandable content areas.",
      },
      {
        id: 3,
        title: "How does useState work in React?",
        content:
          "The useState hook lets you add state to functional components. You can use it to store and update values that trigger re-renders when changed.",
      },
      {
        id: 4,
        title: "What is the difference between props and state?",
        content:
          "Props are inputs passed to a component from its parent, while state is managed inside the component itself and can change over time.",
      },
    ]
  ), [])

  const [count, setCount] = useState(0);


  const [showLoginModal, setShowLoginModal] = useState(false);
  const loginModalRef = useRef();
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showLoginModal && loginModalRef.current) {
        const rect = loginModalRef.current.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
          setShowLoginModal(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showLoginModal]);

  function onLoginBtnClick() {
    setShowLoginModal(true);
  }
  function closeLoginModal() {
    setShowLoginModal(false);
  }
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          {/* <NewNav onLoginBtnClick={onLoginBtnClick} ></NewNav>
 {showLoginModal && 
  <LoginModal ref={loginModalRef} onClose={closeLoginModal} />}
  <Rooms></Rooms> */}
          <div className='border'>
            <p>Count: {count} </p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
          </div>
          <Accordion data={items}></Accordion>
        </UserProvider>
      </BrowserRouter>

      {/* <FoodsPage></FoodsPage>
    <RecurssiveNavPractice></RecurssiveNavPractice>
     */}
    </>
  )
}

export default App
