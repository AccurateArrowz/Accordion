import './App.css'
import Accordion from './Accordion'

function App() {
  const items = [
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
];

  return (
    <>
     <Accordion data={items}></Accordion>
    </>
  )
}

export default App
