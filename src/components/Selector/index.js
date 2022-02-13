import { useState, useEffect } from "react";
import demo from "../../data/data.js";
import css from "./selector.module.css";

function Selector({ search, onSubmit, searchName }) {
  const [character, setCharacter] = useState(demo[0]);

  // useEffect(() => {
  //   async function getSpells() {
  //     let response = await fetch(
  //       `https://www.dnd5eapi.co/api/spells/${search}`
  //     );
  //     let data = await response.json();
  //     setSpells(data.results);
  //     console.log(data.results);
  //   }
  //   getSpells();
  // }, [onSubmit, search, searchName]);
  //Check if there are duplicate names in the character list
  function checkDuplicates(array, key) {
    let duplicates = {};
    array.forEach((item, index) => {
      //count the number of instances that item[key] appears
      let nameCount = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i][key] === item[key]) {
          nameCount++;
          console.log(nameCount);
        }
      }
      //if it's more than one and the name isn't already in dupes, push it to the duplicates array and keep track of the item name
      console.log("item key ", item[key]);
      console.log("No dupes = ", !duplicates[item[key]]);
      console.log("Old duplicates", duplicates);
      if (nameCount > 1 && !duplicates[item[key]]) {
        duplicates[item[key]] = nameCount;
      }
      console.log("New duplicates", duplicates);
    });
    return duplicates;
  }

  const duplicates = checkDuplicates(demo, "name");
  let dupeNumber = 0;

  return (
    <div className="search-list">
      {demo.map(function (item) {
        if (duplicates[item.name]) {
          dupeNumber = duplicates[item.name];
          duplicates[item.name]--;
          return (
            <div id={item.id} key={item.id} className={css.characterListItem}>
              <p
                onClick={() => {
                  console.log(item);
                  onSubmit(item);
                }}
              >
                {item.name} ({dupeNumber})
              </p>
            </div>
          );
        } else {
          return (
            <div id={item.id} key={item.id} className={css.characterListItem}>
              <p
                onClick={() => {
                  console.log(item);
                  onSubmit(item);
                }}
              >
                {item.name}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Selector;
