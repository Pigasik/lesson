import {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () =>{
        setCount((prev) => ++prev);
    }
    const clickLeft = (e) => {
        e.preventDefault();
        setCount((prev) => --prev);
    }
    return (
        <p onClick={clickHandler} onContextMenu={clickLeft}>{count}</p>
    )
}