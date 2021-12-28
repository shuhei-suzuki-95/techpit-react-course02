import {useState} from "../../_snowpack/pkg/react.js";
export const useStateWithStorage = (init, key) => {
  const [value, setValue] = useState(localStorage.getItem(key) || init);
  const setValueWithStorage = (nextValue) => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };
  return [value, setValueWithStorage];
};
