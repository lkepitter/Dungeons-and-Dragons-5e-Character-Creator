import React from "react";
import css from "../display.module.css";

const LevelUpDisplay = ({ searchClass }) => {
  function formatList(array) {
    return array.map((item, index) => {
      if (index !== array.length - 1) {
        return `${item}, `;
      } else {
        return item;
      }
    });
  }

  return (
    <div className={css.display}>
      <div className={css.levelDisplay}>
        <h3>Class Features</h3>
        <p>
          As a {searchClass.name}, you gain the following class features. <br />
          <h4>Hit Points</h4>
          Hit Dice: 1d{searchClass.hitDie} per {searchClass.name} level <br />
          Hit Points at 1st Level: {searchClass.hitDie} + your Constitution
          Modifier
          <br />
          Hit Points at Higher Levels: 1d{searchClass.hitDie} + your
          Constitution modifer per {searchClass.name} level <br />
          <br />
          <h4>Proficiences</h4>
          Armour:{" "}
          {searchClass.armourTrained
            ? formatList(searchClass.armourTrained)
            : ""}
          <br />
          Weapons:{" "}
          {searchClass.weaponsTrained
            ? formatList(searchClass.weaponsTrained)
            : ""}
          <br />
          Tools:{" "}
          {searchClass.toolsTrained ? formatList(searchClass.toolsTrained) : ""}
          <br />
          Saving Throws:{" "}
          {searchClass.savesTrained ? formatList(searchClass.savesTrained) : ""}
          <br />
          {/* Skills: Choose {searchClass.skillsProf.numChoice} from */}
          {/* {searchClass.skillsProf.choices} */}
          <br />
          <h4>Equipment</h4>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            {searchClass
              ? searchClass.startingEquipment.map((item, index) => {
                  return item.c ? (
                    <li key={index + 1}>
                      (a) {item.a}, (b) {item.b} or (c) {item.c}
                    </li>
                  ) : item.b ? (
                    <li key={index + 1}>
                      (a) {item.a} or (b) {item.b}
                    </li>
                  ) : (
                    <li>{item}</li>
                  );
                })
              : ""}
          </ul>
          <br />
        </p>
      </div>
    </div>
  );
};

export default LevelUpDisplay;
