import React, { useState, useEffect } from "react";
import "../App.css"

function OneMeal(props) {
    return (
        <div className = "meal1">
            <h3 className="header3">{props.mealName}</h3>
            <img classNmae="mealImageLink" src={props.image}></img>
            <div className="mealDescription">{props.description}</div>
        </div>
    );

}
export default OneMeal;