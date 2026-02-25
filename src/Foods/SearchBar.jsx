import { useState } from "react"

export default function SearchBar(){
    const [input, setInput] = useState('');
    function handleInputChange(e){
        setInput(e.target.value);
    }

return <input className='rounded border'
     type="text" value={input} onChange={handleInputChange}/>
}