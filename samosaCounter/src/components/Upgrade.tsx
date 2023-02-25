import { FC } from "react";
import './Upgrade.css';

interface Props {
    name: string;
    description: string;
    cost: string;
    upgradeFunction: () => void;
};

const Upgrade:FC<Props> = (props) => {
    return (
        <div className="Upgrade">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={props.upgradeFunction}>{props.cost}</button>
        </div>
    )
};

export default Upgrade;