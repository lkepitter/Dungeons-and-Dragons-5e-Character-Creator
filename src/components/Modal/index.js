import React from "react";
import css from "../Display/display.module.css";

const Modal = ({ character, inputValue, setInputValue, onInput, onEdit }) => {
  return (
    <div id="nameModal" className={css.modal}>
      <div className={css.modalContent}>
        <span className={css.modalClose}>&times;</span>
        <input
          placeholder={character.name}
          value={inputValue}
          onChange={onInput}
        ></input>
        <button
          onClick={() => {
            if (inputValue !== "") {
              onEdit("name", inputValue);
              setInputValue("");
              const modal = document.getElementById("nameModal");
              modal.style.display = "none";
            } else {
              onEdit("name", "Nameless One");
              setInputValue("Nameless One");
              const modal = document.getElementById("nameModal");
              modal.style.display = "none";
            }
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
