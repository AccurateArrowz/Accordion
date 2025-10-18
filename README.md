# React Accordion Component

A lightweight, accessible, and customizable accordion component built with React and Vite. This component allows users to show and hide content with smooth animations.

## Features

- 🎨 Fully customizable styling with tailwind CSS
- ⚡ Built with Vite for optimal performance

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/accordion-component.git
   cd accordion-component
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

```jsx
import { useState } from 'react'
import Accordion from './components/Accordion'
import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const items = [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3'
    }
  ]

  return (
    <div className="app">
      <h1>Accordion Component</h1>
      <Accordion 
        items={items} 
        activeIndex={activeIndex}
        onItemClick={setActiveIndex}
      />
    </div>
  )
}

export default App
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| items | Array | Yes | [] | Array of objects with `title` and `content` properties |
| activeIndex | Number | No | null | Index of the currently active accordion item |
| onItemClick | Function | No | () => {} | Callback function when an accordion item is clicked |
| className | String | No | '' | Additional CSS class for the accordion container |

## Styling

You can customize the appearance of the accordion by overriding the CSS variables in your stylesheet:

```css
:root {
  --accordion-border: #e2e8f0;
  --accordion-bg: #ffffff;
  --accordion-text: #1a202c;
  --accordion-active-bg: #f7fafc;
  --accordion-transition: all 0.3s ease-in-out;
}
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


