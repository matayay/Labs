import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    const updateCount = () => {
        setCount(count + multiplier);
    };

    return (
        <div className='App'>
            <Header count={count} multiplier={multiplier} updateCount={updateCount} />
            <Container count={count} multiplier={multiplier} setCount={setCount} setMultiplier={setMultiplier} />
        </div>
    )
}

export default App;