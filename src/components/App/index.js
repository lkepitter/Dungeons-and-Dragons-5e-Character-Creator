import "./App.css";
import Display from "../Display";
import Selector from "../Selector";
import { useState } from "react";
import demo from "../../data/data.js";

function App() {
  const [character, setCharacter] = useState(demo[0]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("name");

  console.log("searchtype", searchType);

  function onSubmit(item) {
    //let name = item.name.replace(/ /g, "-");
    let name = item.name.replace(/'/g, "").toLowerCase();
    //name = name.toLowerCase();
    setSearchName(name);
    //search for character name in array
    let found = demo.filter((char) => {
      return char.name === item.name;
    });
    setCharacter(found[0]);
    console.log("Submitted: ", found[0]);
  }

  return (
    <div className="App">
      <Selector searchName={searchName} onSubmit={onSubmit}></Selector>
      <Display character={character}> </Display>
    </div>
  );
}

export default App;
