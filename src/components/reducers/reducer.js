export const reducer = (state, action) => {
  if (action.type === "SET_THEME") {
    return {
      ...state,
      dark: !state.dark,
    };
  }
  if (action.type === "TOGGLE_NAV") {
    return {
      ...state,
      nav: !state.nav,
    };
  }
  if (action.type === "SET_BA") {
    return {
      ...state,
      blockUser: action.payload,
    };
  }
};
