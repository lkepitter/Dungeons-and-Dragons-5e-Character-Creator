import "./App.css";
import Display from "../Display";
import Selector from "../Selector";
import { useState } from "react";
import demo from "../../data/data.js";
import Menu from "../Menu";

function App() {
  const [character, setCharacter] = useState(demo[0]);
  const [searchName, setSearchName] = useState("");
  const [leftMenu, setLeftMenu] = useState("levelSelector");
  //const [searchType, setSearchType] = useState("name");

  //console.log("searchtype", searchType);

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
    console.log("onEdit. Character is now:", demo[updateCharacterIndex]);
    //for online db changes, this will be handled by a patch request
  }
  //onEdit called by a submit button push

  const templateChar = {
    name: "Nameless One",
    class: "Bard",
    race: "Elf",
    subrace: "Moon Elf",
    charLevel: 1,
    background: "Folk Hero",
    abilities: {
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
    skills: {
      Acrobatics: "U",
      AnimalHandling: "U",
      Arcana: "U",
      Athletics: "U",
      Deception: "U",
      History: "U",
      Insight: "U",
      Intimidation: "U",
      Investigation: "U",
      Medicine: "U",
      Nature: "U",
      Perception: "U",
      Performance: "U",
      Persuasion: "U",
      Religion: "U",
      SleightOfHand: "U",
      Stealth: "U",
      Survival: "U",
    },
    armorClass: 10,
    hp: 10,
    img: "",
    savingThrows: {
      Strength: false,
      Dexterity: false,
      Constitution: false,
      Intelligence: false,
      Wisdom: false,
      Charisma: false,
    },
  };

  function addNew(name) {
    console.log(`Add: ${name}`);
    //find the last id number and set id to that +1
    let idArray = [];
    let id = 0;
    demo.forEach((item) => {
      idArray.push(item.id);
      const max = Math.max(...idArray);
      console.log(`idArray: ${idArray} max: ${max}`);
      return (id = max + 1);
    });
    demo.push({ id: id, ...templateChar, name: name });
    console.log(demo[demo.length - 1]);
    //for online db changes, this will be handled by a post request
    setCharacter(demo[demo.length - 1]);
  }

  return (
    <div className="App">
      <Menu addNew={addNew} setLeftMenu={setLeftMenu} />

      <Display
        character={character}
        onEdit={onEdit}
        onSubmit={onSubmit}
        setLeftMenu={setLeftMenu}
        leftMenu={leftMenu}
      >
        {" "}
      </Display>
    </div>
  );
}

export default App;
