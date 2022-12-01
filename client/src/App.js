import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import InputIngredient from "./Components/InputIngredient";

function App() {
  const [expressCheck, setExpressCheck] = useState("");
  const [ingreditentNames, setIngredientNames] = useState([]);
  const [meals, setMeals] = useState([]);
  const [ingr1, setIngr1] = useState('');
  const [ingr2, setIngr2] = useState('');
  const [ingr3, setIngr3] = useState('');

  function getIngredients() {
    axios.get(`http://www.themealdb.com/api/json/v1/1/list.php?i=list`, {timeout: 10 * 1000}).then((body) => {
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
    axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr2}`, {timeout: 10 * 1000}).then((body) => {
      setMeals(body.data.meals.map((elem) => {return elem.strMeal}));
      console.log("data:", body.data)
	}, (err) => {
		console.log("Error: ", err);
	});
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-2/3 md:w-1/2 gap-4"> */}
          {/* <div className="border rounded border-gray-500 bg-slate-700 p-4">
            <h1>React</h1>
            <p className="text-lg">
              <a className="text-pink-300" href="https://reactjs.org">
                React
              </a>{" "}
              is a frontend development framework. If you're using Angular or Vue, I am so sorry for you. 
            </p>
          </div>
          <div className="border rounded border-gray-500 bg-slate-700 p-4">
            <h1>Express</h1>
            <p className="text-lg py-2">
              <a className="text-pink-300" href="https://expressjs.com/">
                Express
              </a>{" "}
              is a Node.js web app framework. To create new routes, add files to api/routes. Feel free to use testAPI.js (which is where "Working properly" is being pulled from) as a reference
          </p>
          
            <div className="flex gap-2 text-center justify-center">
              <p className="text-sm font-bold">Express Status:</p>
            <p className="text-sm">{expressCheck}</p>
            
            </div>
          
          </div>
          <div className="border rounded border-gray-500 bg-slate-700 p-4">
            <h1>Tailwind</h1>
            <p className="text-lg">
              <a className="text-pink-300" href="https://tailwindcss.com/">
                Tailwind
              </a>{" "}
              is a utility-class based CSS framework. With Tailwind, in-line styling is super easy, and all the classes you see in className are Tailwind classes.  
            </p>
          </div>
          <div className="border rounded border-gray-500 bg-slate-700 p-4">
            <h1>Vivid</h1>
            <p className="text-lg">
              <a className="text-pink-300" href="https://docs.vivid.lol">
                Vivid
              </a>{" "}
              is an in-browser styler for your Tailwind classes. Command-Click on any component you see on your screen to pull up Vivid's code pane. Then hit Command-K to bring up the command palette. 
            </p>
          </div> */}
          {/* <h3 className="header3">protein</h3>
          <datalist id = "suggestions">
            {ingreditentNames.map((name) => <option onClick={"() => setInstance(name)"}>{name}</option>)}
          </datalist>
          <input id="ingredientSelect" type="text" autoComplete="on" list="suggestions" onInput={() => handleChange()}></input>
          <input id="dunno" type="text" onInput={console.log("Hello")}></input> */}

        {/* </div> */}
        <InputIngredient ingredients = {ingreditentNames} title = "1st" addIngr = {setIngr1} currIngr = {ingr1}></InputIngredient>
        <InputIngredient ingredients = {ingreditentNames} title = "2nd" addIngr = {setIngr2} currIngr = {ingr2}></InputIngredient>
        <InputIngredient ingredients = {ingreditentNames} title = "3rd" addIngr = {setIngr3} currIngr = {ingr3}></InputIngredient>
      </header>
    </div>
  );
}

export default App;
