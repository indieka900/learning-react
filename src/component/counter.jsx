import { useState, useEffect } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0);
    //const [sync, setSync] = useState(false);
    useEffect(()=> {
        document.title = "Joseph Learning React" + counter
    }, [counter]);

    useEffect(()=>{
        const controller = new AbortController ();
        /*fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        }).then((res)=>{
            return res.json()
        }).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.log(e);
            console.log("Invalid endpoints");
        })*/
       async function fetchUser (){
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                signal: controller.signal
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        
       }
       fetchUser();
       return () => {
        controller.abort();
       }
    },[])
   
    return (
        
        <div>
            <h1><span>Counter is: {counter}</span></h1>
            <button type="button" onClick={() => setCounter((count) => count + 1)}>Increase</button>
            <button type="button" onClick={() => setCounter((count) => count - 1)}>Decrease</button>
        </div>
    )
}