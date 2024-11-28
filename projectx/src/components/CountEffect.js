import React, {useEffect, useState} from "react";

export default function Counter({initialValue = 0,step = 1}) {
    const [count, setCount] = useState(initialValue)
    const [time, setTime] = useState(new Date())
    let timer = null
//DID MOUNT 
    useEffect(() => {
        console.log('Component mounted ! ')
        timer = setInterval(()=> {
            console.log('tick')
            setTime(new Date())
        },1000)
//WILLUNMOUT
        return () => {
            clearInterval(timer)
        }
    }, []);
//DIDUPDATE
    useEffect(() => {
        console.log('increment  active ! ')

    }, [count]);
//RENDER METHOD()
    return <div>
        <h1>Welcome to useeffect() hook</h1>
        Date: <span>{time.toLocaleString()}</span>
        <span>
            <button onClick={() => {
                setCount(prevState => {
                    return prevState + step
                })
            }}>Click to increment !! </button>
            <button onClick={() => {
                setCount(0)
            }}>Reset !! </button>

            Il y a {count} secondes
        </span>
    </div>
}