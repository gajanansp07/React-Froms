import React,{useState} from 'react'

function IntroducingHooks() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1> Introducing Hooks </h1>
            <p>You clicked button {count} times.</p>
            <button onClick={()=> setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default IntroducingHooks
