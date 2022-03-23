import React, { useState } from "react";
import css from "./menu.module.css";

const Menu = ({ addNew, setLeftMenu, onSubmit }) => {
  const [newName, setNewName] = useState("");
  function newCharModal() {
    // Get the modal
    const modal = document.getElementById("newCharModal");

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
        modal.style.display = "newChar";
      }
    };
    console.log("modal");
  }
  function onNameInput(event) {
    setNewName(event.target.value);
    console.log("NewName is: ", event.target.value);
  }

  return (
    <div className={css.dropdown}>
      <button className={css.dropbtn}>Menu</button>
      <div className={css.dropdownContent}>
        <button
          onClick={() => {
            newCharModal();
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            setLeftMenu("charSelector");
          }}
        >
          Load
        </button>
      </div>
      <div id="newCharModal" className={css.modal}>
        <div className={css.modalContent}>
          <span className={css.modalClose}>&times;</span>
          <input
            placeholder={"Enter character name"}
            value={newName}
            onChange={onNameInput}
          ></input>
          <button
            onClick={() => {
              if (newName !== "") {
                console.log("Adding new character: ", newName);
                addNew(newName);
                setNewName("");
                const modal = document.getElementById("newCharModal");
                modal.style.display = "none";
              } else {
                addNew("Nameless One");
                setNewName("Nameless One");
                const modal = document.getElementById("newCharModal");
                modal.style.display = "none";
              }
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
