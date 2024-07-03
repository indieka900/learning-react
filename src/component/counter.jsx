import { useState, useEffect } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0);
    //const [sync, setSync] = useState(false);
    useEffect(()=> {
        document.title = "Joseph Learning React" + counter
    }, [counter]);
    return (
        <div>
            <h1><span>Counter is: {counter}</span></h1>
            <button type="button" onClick={() => setCounter((count) => count + 1)}>Increase</button>
            <button type="button" onClick={() => setCounter((count) => count - 1)}>Decrease</button>
        </div>
    )
}