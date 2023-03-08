import React, { Component, useEffect, useState } from "react";
import { FC } from "react";

interface Props {
    handleChange: (e: any) => void;
    label: string;
    choices: string[];
    checked: string;
};

const RecipeChoices:FC<Props> = (props) => {

    return (
        <div className="radio-buttons">
            {props.choices &&
                props.choices.map((choice) => (
                <li key={choice}>
                    <input
                    id={choice}
                    value={choice}
                    name={props.label}
                    type="radio"
                    onChange={props.handleChange}
                    checked={props.checked == choice}
                    />
                    {choice}
                </li>
                ))}
        </div>
    )
};

export default RecipeChoices;