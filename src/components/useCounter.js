import { useState } from "react";

export function useCounter(initialState = 0, initialName = "display") {
  const [display, setDisplay] = useState(initialState);
  const [displayName, setDisplayName] = useState(initialState);

  const up = () => {
    setDisplay(display + 1);
  };

  const down = () => {
    setDisplay(display - 1);
  };

  const reset = () => setDisplay(initialState);

  const updateDisplayName = (evt) => setDisplayName(evt.target.value);

  return { display, up, down, reset, displayName, updateDisplayName };
}
