import "./App.css";
import Display from "../Display";
import Selector from "../Selector";
import { useState } from "react";
import demo from "../../data/data.js";
import Menu from "../Menu";

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

  function onEdit(field, content, subfield) {
    console.log(`Edit: ${field} (${subfield}) with ${content}`);
    //refresh display?
    //find the edited field in the character object
    //returns an array of the keys
    const updateKey = Object.keys(character).find((item) => {
      return field === item;
    });

    //find the character we're at in the demo array
    let updateCharacterIndex = demo.findIndex((item) => {
      return item === character;
    });
    if (subfield) {
      //find subfield as well where we have one
      const updateSubKey = Object.keys(character[updateKey]).find((item) => {
        return subfield === item;
      });
      demo[updateCharacterIndex][updateKey][updateSubKey] = content;
    } else {
      demo[updateCharacterIndex][updateKey] = content;
    }
    console.log(demo[updateCharacterIndex]);
    //for online db changes, this will be handled by a patch request
  }
  //onEdit called by a submit button push

  //console.log(onEdit("hp", 15));

  return (
    <div className="App">
      <Menu />
      <Selector searchName={searchName} onSubmit={onSubmit}></Selector>
      <Display character={character} onEdit={onEdit}>
        {" "}
      </Display>
    </div>
  );
}

export default App;
