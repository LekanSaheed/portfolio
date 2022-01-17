import React, { useContext, useReducer } from "react";
import { defaultState } from "./defaultState";
import { reducer } from "./reducer";

const ThemeContext = React.createContext();

const useGlobalContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const setTheme = () => {
    dispatch({ type: "SET_THEME" });
  };
  const toggleNav = () => {
    dispatch({ type: "TOGGLE_NAV" });
  };

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        ...state,
        toggleNav,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useGlobalContext };
