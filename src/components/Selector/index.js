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

  return (
    <div className="search-list">
      {demo.map(function (item) {
        return (
          <div id={item.name} key={item.name} className={css.characterListItem}>
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
      })}
    </div>
  );
}

export default Selector;
