import './Container.css';
import Upgrade from './Upgrade';
import { FC } from "react";

interface Props {
    count: number;
    setCount: (A: number) => void;
    multiplier: number;
    setMultiplier: (A: number) => void;
};

const Container:FC<Props> = (props) => {
    const buyDoubleStuffed = () => {
        if (props.count >= 10)
        {
            props.setMultiplier(props.multiplier * 2);
            props.setCount(props.count - 10);
        }
    };

    const buyPartyPack = () => {
        if (props.count >= 100)
        {
            props.setMultiplier(props.multiplier * 5);
            props.setCount(props.count - 100);
        }
    };

    const buyFullFeast = () => {
        if (props.count >= 1000)
        {
            props.setMultiplier(props.multiplier * 10);
            props.setCount(props.count - 1000);
        }
    };

    return (
        <div className="Container">
            <Upgrade name="Double Stuffed 👯‍♀️" description="2x per click" cost="10 samosas" upgradeFunction={buyDoubleStuffed} />
            <Upgrade name="Party Pack 🎉" description="5x per click" cost="100 samosas" upgradeFunction={buyPartyPack} />
            <Upgrade name="Full Feast 👩🏽‍🍳" description="10x per click" cost="1000 samosas" upgradeFunction={buyFullFeast} />
        </div>
    )
};

export default Container;