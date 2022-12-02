import React, { useState, useEffect } from "react";
import "../App.css"
import OneMeal from "./OneMeal";

function Showmeals(props) {
    if (props.meals.length > 0) {
        console.log(props.meals[0]);
        return (
            <div className = "ingredientDiv">
                {props.meals.map((elem) => <OneMeal mealName ={elem.strMeal} image = {elem.strMealThumb} description = "this description"></OneMeal>)}
            </div>
        );
    } else{
        return (
            <div>
                Select valid ingredients!
            </div>
            );
    }
}
export default Showmeals;