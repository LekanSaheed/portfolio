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
  const setBlockUser = (acc) => {
    dispatch({ type: "SET_BA", payload: acc });
  };

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        ...state,
        toggleNav,
        setBlockUser,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useGlobalContext };
