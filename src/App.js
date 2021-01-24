import Header from "./Header";
import Button from "./Button";
import JokeGallery from "./JokeGallery";
import "./App.css";
import { useState } from "react";

function App() {

  const [jokeArray, setJokeArray] = useState([])

  // useEffect tells React to perform actions
  // that are not directly related to drawing,
  // aka side effects---
  // This is the equivalent of "window.onload"
  // This side effect will run 1 time, no matter how 
  // oftne React has to rerun the APP function
  
    async function getJoke(){
    const jokePromise = fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      }
    });
    const response = await jokePromise;
    const jokeData = await response.json();
    
    
    setJokeArray([
      ...jokeArray, 
      jokeData
    ]);
  }

  function deleteJoke(id) {
    console.log(`You want to delete ${id}`)
    setJokeArray(jokeArray.filter(j=>{
      return j.id !== id 
    }))
  }
  

  return (
    <div className="App">
      <Header />
      <Button getJoke={getJoke}/>
      <JokeGallery jokes={jokeArray} deleteJoke={deleteJoke}/>
    </div>
  );
}

export default App;
