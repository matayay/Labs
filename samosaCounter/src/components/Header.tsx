import React from "react";
import { useState } from "react";
import samosa from '../assets/samosimg.png';

const Header = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    const updateCount = () => {
        setCount(count + multiplier);
    };

    return (
        <div className='Header'>
            <h1>Samosa Selector</h1>
            <h2>Count: {count}</h2>
            <img className='samosa' src={samosa} onClick={updateCount} />
        </div>
    )
};

export default Header;