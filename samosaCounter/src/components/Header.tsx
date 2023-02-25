import samosa from '../assets/samosimg.png';
import { FC } from "react";
import './Header.css';

interface Props {
    count: number;
    multiplier: number;
    updateCount: () => void;
};

const Header:FC<Props> = (props) => {
    return (
        <div className='Header'>
            <h1>Samosa Selector</h1>
            <h2>Count: {props.count}</h2>
            <img className='samosa' src={samosa} onClick={props.updateCount} />
        </div>
    )
};

export default Header;