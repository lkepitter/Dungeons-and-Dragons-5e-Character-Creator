import css from "./display.module.css";
import { useState } from "react";

function Display({ character, onEdit }) {
  const [newName, setNewName] = useState(character.name);
  console.log("Displaying: ", character);

  // useEffect(() => {
  //   function getSpell() {
  //     let response = await fetch(`https://www.dnd5eapi.co/api/spells/${name}`);
  //     setSpell(await response.json());
  //   }
  //   getSpell();
  // }, [name]);
  function calculateAbilityMod(ability) {
    return Math.floor((ability - 10) / 2);
  }

  const profBonus = Math.floor(2 + (1 / 4) * (character.charLevel - 1));
  console.log("Prof bonus: ", profBonus);

  const strengthMod = calculateAbilityMod(character.abilities.Strength);
  const dexterityMod = calculateAbilityMod(character.abilities.Dexterity);
  const constitutionMod = calculateAbilityMod(character.abilities.Constitution);
  const intelligenceMod = calculateAbilityMod(character.abilities.Intelligence);
  const wisdomMod = calculateAbilityMod(character.abilities.Wisdom);
  const charismaMod = calculateAbilityMod(character.abilities.Charisma);

  const savingThrows = character.savingThrows;
  console.log(savingThrows);

  function calculateSavingThrow(ability) {
    //take in the ability as a string and check it to see if character is proficient
    // let save = 0;
    // if (character.savingThrows.ability){
    //   save += profBonus;
    // }
    // save += abilityMod
    // return save
    switch (ability) {
      case "Strength":
        let strength = 0;
        if (character.savingThrows.Strength) {
          strength += profBonus;
        }
        strength += strengthMod;
        console.log("strength is", strength);
        return strength;
      case "Dexterity":
        let dexterity = 0;
        if (character.savingThrows.Dexterity) {
          dexterity += profBonus;
        }
        dexterity += dexterityMod;
        console.log("dexterity is", dexterity);
        return dexterity;
      case "Constitution":
        let constitution = 0;
        if (character.savingThrows.Constitution) {
          constitution += profBonus;
        }
        constitution += constitutionMod;
        console.log("constitution is", constitution);
        return constitution;
      case "Intelligence":
        let intelligence = 0;
        if (character.savingThrows.Intelligence) {
          intelligence += profBonus;
        }
        intelligence += intelligenceMod;
        console.log("intelligence is", intelligence);
        return intelligence;
      case "Wisdom":
        let wisdom = 0;
        if (character.savingThrows.Wisdom) {
          wisdom += profBonus;
        }
        wisdom += wisdomMod;
        console.log("wisdom is", wisdom);
        return wisdom;
      case "Charisma":
        let charisma = 0;
        if (character.savingThrows.Charisma) {
          charisma += profBonus;
        }
        charisma += charismaMod;
        console.log("charisma is", charisma);
        return charisma;
      default:
        break;
    }
    return;
  }

  const strengthSave = calculateSavingThrow("Strength");
  const dexteritySave = calculateSavingThrow("Dexterity");
  const constitutionSave = calculateSavingThrow("Constitution");
  const intelligenceSave = calculateSavingThrow("Intelligence");
  const wisdomSave = calculateSavingThrow("Wisdom");
  const charismaSave = calculateSavingThrow("Charisma");

  console.log("strength save is", calculateSavingThrow("Strength"));

  function editModal(toEdit) {
    // Get the modal
    const modal = document.getElementById("nameModal");

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
    console.log("modal");
  }

  function onNameInput(event) {
    setNewName(event.target.value);
    console.log("NewName is: ", event.target.value);
  }

  // function onSubmitName(newName) {

  // }
  //Character Name is working as intended, just need to have the selector update to the newest name (though it's not intended to display all the time anyway)
  return (
    <div className="display">
      <div className={css.header}>
        <img
          src={character.img}
          alt={character.name + "portrait"}
          className={css.portrait}
        ></img>
        <h1
          className={css.name}
          onClick={() => {
            editModal(character.name);
            setNewName(character.name);
          }}
        >
          {character.name}
        </h1>
        <div id="nameModal" className={css.modal}>
          <div className={css.modalContent}>
            <span className={css.modalClose}>&times;</span>
            <input
              placeholder={character.name}
              value={newName}
              onChange={onNameInput}
            ></input>
            <button
              onClick={() => {
                if (newName !== "") {
                  onEdit("name", newName);
                  setNewName("");
                  const modal = document.getElementById("nameModal");
                  modal.style.display = "none";
                } else {
                  onEdit("name", "Nameless One");
                  setNewName("Nameless One");
                  const modal = document.getElementById("nameModal");
                  modal.style.display = "none";
                }
              }}
            >
              Confirm
            </button>
          </div>
        </div>
        <div className={css.charInfo}>
          <div className={css.detail}>
            <p className={css.detailTitle}>Level</p>
            <p className="detail"> {character.charLevel}</p>
            <p className={css.detailTitle}>Class</p>
            <p className="detail"> {character.class}</p>
            <p className={css.detailTitle}>Race</p>
            <p className="detail">
              {character.race}/{character.subrace}
            </p>
            <p className={css.detailTitle}>Background</p>
            <p className="detail">{character.background}</p>
          </div>
        </div>
        <div className={css.defences}>
          <div className={css.ac}>
            <p className={css.defenceTitle}>AC</p>
            <p className={css.defence}> {character.armorClass}</p>
          </div>
          <div className={css.hp}>
            <p className={css.defenceTitle}>HP</p>
            <p className={css.defence}> {character.hp}</p>
          </div>
        </div>
      </div>
      <main className={css.mainDisplay}>
        <div className={css.mainHead}>
          <div className={css.abilities}>
            <div className={css.ability}>
              <p>STR</p>
              <p>{character.abilities.Strength}</p>
              <p>{strengthMod}</p>
            </div>
            <div className={css.ability}>
              <p>DEX</p>
              <p>{character.abilities.Dexterity}</p>
              <p>{dexterityMod}</p>
            </div>
            <div className={css.ability}>
              <p>CON</p>
              <p>{character.abilities.Constitution}</p>
              <p>{constitutionMod}</p>
            </div>
            <div className={css.ability}>
              <p>INT</p>
              <p>{character.abilities.Intelligence}</p>
              <p>{intelligenceMod}</p>
            </div>
            <div className={css.ability}>
              <p>WIS</p>
              <p>{character.abilities.Wisdom}</p>
              <p>{wisdomMod}</p>
            </div>
            <div className={css.ability}>
              <p>CHA</p>
              <p>{character.abilities.Charisma}</p>
              <p>{charismaMod}</p>
            </div>
          </div>
          <div className={css.savingThrows}>
            <h4>Saving Throws</h4>
            <div className={css.saves}>
              <div className={css.save}>
                <p>STR</p>
                <p>{strengthSave}</p>
              </div>
              <div className={css.save}>
                <p>DEX</p>
                <p>{dexteritySave}</p>
              </div>
              <div className={css.save}>
                <p>CON</p>
                <p>{constitutionSave}</p>
              </div>
              <div className={css.save}>
                <p>INT</p>
                <p>{intelligenceSave}</p>
              </div>
              <div className={css.save}>
                <p>WIS</p>
                <p>{wisdomSave}</p>
              </div>
              <div className={css.save}>
                <p>CHA</p>
                <p>{charismaSave}</p>
              </div>
              <div className={css.saveBonuses}>
                Save Bonuses: advantage on X, Y
              </div>
            </div>
          </div>
        </div>
        <div className={css.description}>
          <p className="desc">Character description here</p>
          <p className="detailButtons"></p>
        </div>
      </main>
    </div>
  );
}

export default Display;
