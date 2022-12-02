import React, { useState, useEffect } from "react";
import "../App.css"

function OneMeal(props) {
    return (
        <div className = "meal1">
            <h3 className="mealName">{props.mealName}</h3>
            <img className="mealImage" src={props.image}></img>
            {/* <div className="mealDescription">{props.description}</div> */}
        </div>
    );

}
export default OneMeal;