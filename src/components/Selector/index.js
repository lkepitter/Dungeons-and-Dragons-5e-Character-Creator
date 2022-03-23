import { useState } from "react";
import demo, { charClass } from "../../data/data.js";
import LevelUpDisplay from "../Display/LevelUpDisplay/index.js";
import css from "./selector.module.css";
//import { classes } from "../../data/api_sample.js";

function Selector({ onSubmit, setLeftMenu, leftMenu, character, onEdit }) {
  const [searchClass, setSearchClass] = useState("");
  //const [character, setCharacter] = useState(demo[0]);

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

  function classModal() {
    // Get the modal
    const modal = document.getElementById("classModal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName(css.modalClose)[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "toEdit";
      }
    };
  }

  function findCharElement(charElement, subElement, array) {
    console.log("findCharElement is running");
    const found = array.filter((item) => {
      console.log("Item subelement is ", item[subElement]);
      return item[subElement] === charElement;
    });
    console.log("Found is ", found);
    return found[0];
  }

  const duplicates = checkDuplicates(demo, "name");
  let dupeNumber = 0;
  //let searchClass = "";
  const currentClass = charClass.filter((charClass) => {
    return charClass.name === character.class;
  })[0];
  console.log("Current class is ", currentClass);

  if (leftMenu === "levelSelector") {
    return (
      <div className="level-list">
        <div className={css.initial}>
          <div
            className={css.initialList}
            onClick={() => {
              classModal();
            }}
          >
            Class {character.class}
          </div>
          {/*begin classModal*/}
          <div id="classModal" className={css.modal}>
            <div className={css.modalContent}>
              <span className={css.modalClose}>&times;</span>
              <div className={css.classEdit}>
                <div className={css.header}>
                  <h3>Select Class</h3>
                </div>
                <div className={css.menu}>
                  <div>
                    {charClass.map(function (item) {
                      return (
                        <p
                          className={css.class}
                          onClick={() => {
                            setSearchClass(
                              findCharElement(item.name, "name", charClass)
                            );
                            console.log("searchClass is", searchClass);
                          }}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className={css.display}>
                  <LevelUpDisplay searchClass={searchClass} />
                </div>
                <div className={css.footer}>
                  <button
                    onClick={() => {
                      if (searchClass) {
                      }
                      onEdit("class", searchClass.name);
                      onSubmit(character);
                      const modal = document.getElementById("classModal");
                      modal.style.display = "none";
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("classModal");
                      modal.style.display = "none";
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*end classModal*/}
          <div className={css.initialList}>Race {character.race}</div>
          <div className={css.initialList}>Subrace {character.subrace}</div>
          <div className={css.initialList}>
            Background {character.background}
          </div>
        </div>
        {currentClass.levels.map(function (item, index) {
          return (
            <div id={item.id} key={item.id} className={css.levelListItem}>
              <h4>Level {item.id}</h4>
              <div className={css.levelFeature}>
                {item.features.map(function (item) {
                  return <div className={css.levelFeature}>{item}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (leftMenu === "charSelector") {
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
                    setLeftMenu("levelSelector");
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
                    setLeftMenu("levelSelector");
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
}

export default Selector;
