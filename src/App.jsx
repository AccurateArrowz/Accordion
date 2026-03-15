import './App.css'
import Accordion from './Accordion'
import Parent from './TooltipParent.jsx';
import FoodsPage from './Foods/FoodsPage.jsx'
// import RecurssiveNavPractice from './PracticeRecurrsiveNav/RecurssiveNavPractice.jsx';
import NewNav from './Practice/NewNav.jsx';
import { UserProvider } from './Practice/useUser.jsx'
import { BrowserRouter } from 'react-router-dom'
import Rooms from './Practice/Rooms.tsx'
import { useEffect, useRef, useState, useMemo, use } from 'react';
import { LoginModal } from './Practice/auth/components/LoginModal.jsx';
import {Score} from './Practice/Score.jsx'
import HeroForm from './Practice/HeroForm.jsx'

function OneSecUpdate(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setInterval(()=> {
      console.log("count: " , count);
      setCount(count+1)},1000)
  }, [])
  return <p className='text-[16px]'>Count: {count}</p>
}

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

  


  const [showLoginModal, setShowLoginModal] = useState(false);
  const loginModalRef = useRef();

  //adding listener via useEffect to handleOutsideClick when loginModal is open
  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log('handleOutsideClick called; showLoginModal ', showLoginModal)
      if (showLoginModal && loginModalRef.current) {
        const rect = loginModalRef.current.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
          setShowLoginModal(false);
        }
      }
    };
  if(showLoginModal) document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showLoginModal]);

  function onLoginBtnClick(e) {
    e.stopPropagation();
    setShowLoginModal(true);
  }
  function closeLoginModal() {
    setShowLoginModal(false);
  }
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <NewNav onLoginBtnClick={onLoginBtnClick} ></NewNav>
          {/* <OneSecUpdate></OneSecUpdate> */}
 {
  <LoginModal showLoginModal={showLoginModal}
    ref={loginModalRef} onClose={closeLoginModal} />}
    {/* <HeroForm></HeroForm> */}
    {/* <Score></Score> */}
  {/* <Rooms></Rooms> */}
          {/* <div className='border'>
            <p>Count: {count} </p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
          </div>
          <Accordion data={items}></Accordion> */}
        </UserProvider>
      </BrowserRouter>

      {/* <FoodsPage></FoodsPage>
    <RecurssiveNavPractice></RecurssiveNavPractice>
     */}
    </>
  )
}

export default App
