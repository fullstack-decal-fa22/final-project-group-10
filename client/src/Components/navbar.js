import React from "react";

export default function NavBarContainer(props) {
    return (
        <div id = "navBar">
            <div className= "title"> Find My Meal</div>
            <div className = "navLinks">
                <ul>
                    <li>
                        <a href="#meal">Find A Meal!</a>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}