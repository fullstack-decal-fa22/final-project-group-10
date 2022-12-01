import React, { useState, useEffect } from "react";
import "../App.css"

function InputIngredient(props) {

    function handleChange() {
        let instanceInput = document.getElementById("ingredientSelect" + props.title).value;
        props.addIngr(instanceInput)
        console.log("input was: ", instanceInput)
    }
    // console.log(props.ingredients)
    

    return (
        <div className = "ingredientDiv">
            <h3 className="header3">{props.title + " Ingredient"}</h3>
            <datalist id = "suggestions">
                {props.ingredients.map((name) => <option onClick={() => handleChange()}>{name}</option>)}
            </datalist>
            <input id={"ingredientSelect"+props.title} type="text" autoComplete="on" list="suggestions" onInput={() => handleChange()}></input>
        </div>
    );


}
export default InputIngredient;