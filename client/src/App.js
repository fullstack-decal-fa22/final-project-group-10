import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import InputIngredient from "./Components/InputIngredient";
import NavBarContainer from "./Components/navbar";
import Showmeals from "./Components/Showmeals";

// var cors = require("cors");
// var app = express();
// app.use(cors());

function App() {
  const [expressCheck, setExpressCheck] = useState("");
  const [ingreditentNames, setIngredientNames] = useState([]);
  const [meals, setMeals] = useState([]);
  const [ingr1, setIngr1] = useState('');
  const [ingr2, setIngr2] = useState('');
  const [ingr3, setIngr3] = useState('');

  function getIngredients() {
    axios.get(`http://www.themealdb.com/api/json/v1/1/list.php?Access-Control-Allow-Origin=*&i=list`, {timeout: 10 * 1000}).then((body) => {
      setIngredientNames(body.data.meals.map((elem) => {return elem.strIngredient}));
      console.log(body.data.meals)
	}, (err) => {
		console.log("Error: ", err);
	});
  }


  useEffect(() => {
    axios
      .get(`http://localhost:9000/testAPI`)
      .then((res) => {
        setExpressCheck(res.data);
        console.log(res.data);
      })
      .catch(() => setExpressCheck("Currently down."));
      getIngredients();
      console.log(ingreditentNames)
  }, []);

  useEffect(() => {
    console.log("this ingredient got selected for 1: ", ingr1);
    console.log("this ingredient got selected for 2: ", ingr2);
    console.log("this ingredient got selected for 3: ", ingr3);
    getMeal(ingr1, ingr2, ingr3)
    console.log("Meals output:", meals);
  }, [ingr1, ingr2, ingr3]);

  function getMeal(ingr1, ingr2, ingr3) {
    axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr2}&i=${ingr1}&i=${ingr3}`, {timeout: 10 * 1000}).then((body) => {
      setMeals(body.data.meals);
      console.log("data:", body.data)
	}, (err) => {
    
		console.log("Error: ", err);
	});
  }

  return (
    <div className="App">
      <header className="App-header">
        <navBar></navBar>
        <NavBarContainer></NavBarContainer>
        <div id="Home">
          <div className= "leftHome">
          <div className="bigText">
            <div className="nametxt"><h1>Find My Meal!</h1></div>
            <div className="slogan"><h2>Find a meal from your leftover ingredients easily!</h2></div>
          </div>
          </div>
          <div className="rightHome">
            <img src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-sandwich-illustration-png-image_6357278.png"></img>
          </div>
        </div>
        <div className="arrow">
            
        </div>
        <div id='meal'>
          <div className="ingrDiv">
          <InputIngredient ingredients = {ingreditentNames} title = "1st" addIngr = {setIngr1} currIngr = {ingr1}></InputIngredient>
        <InputIngredient ingredients = {ingreditentNames} title = "2nd" addIngr = {setIngr2} currIngr = {ingr2}></InputIngredient>
        <InputIngredient ingredients = {ingreditentNames} title = "3rd" addIngr = {setIngr3} currIngr = {ingr3}></InputIngredient>
      


          </div>

          <div id="showMeals">
            <Showmeals meals={meals}></Showmeals>
          </div>


        </div>
        </header>
    </div>
  );
}

export default App;
