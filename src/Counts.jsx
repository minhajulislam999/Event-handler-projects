import { useState } from "react"


export default function Counts(){
    const [count, setCount] = useState(0);
    

    function handleIncrement(){
        setCount(count + 1
        );

        if(count === 10){
            alert('Count reached to 10');
        }

        

    }

    function handleDecrement(){
        setCount(count - 1);
        if(count> 0){
            setCount(count -0);
        }
    }

    function handleReset(){
        setCount(0);
    }

    function handleFivePlus(){
        setCount(count + 5);
    }

    function handleFiveMinus(){
        setCount(count - 5);
    }

    return(
        
        <div className="card">
            <h2>Count:{count}</h2>
            <button className="btn-style" onClick={handleIncrement}>Increment</button>
            <button className="btn-style" onClick={handleDecrement}>Decrement</button>
            <button className="btn-style" onClick={handleReset}>Reset</button>
            <button className="btn-style" onClick={handleFivePlus}>5plus</button>
            <button className="btn-style" onClick={handleFiveMinus}>-5</button>
        </div>
    )
}