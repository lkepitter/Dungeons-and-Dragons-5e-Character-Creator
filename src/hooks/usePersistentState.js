import { useEffect, useState } from "react";

export function usePersistentState() {
  const [character, setCharacter] = useState(
    localStorage.getItem("character1") || "demo"
  );

  useEffect(() => {
    //later need to change this to increase each time with something like a prop or state
    let lastCharNumber = 2;
    localStorage.setItem(`character${lastCharNumber}`, character);
  }, [character]);

  function handleChange(e) {
    setCharacter(e.target.value);
  }
  console.log(character);
  return { character, handleChange };
}
