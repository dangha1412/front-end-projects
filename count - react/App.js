import React from "react"

export default function App() {
    const [count, func]= React.useState(0)
    function increment () {
        func(count+1)
    }
    function decrement () {
        func(count-1)
    }
     return (
        <div className="counter">
            <button className="counter--minus" onClick={decrement} >–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increment}>+</button>
        </div>
    )
}
