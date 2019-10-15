export const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

const reducer = (state = initialState, action) => {
  console.log("userReducer : ", action);
  switch (action.type) {
    case SAVE_TOKEN:
      return applySaveToken(state, action);
    case LOGOUT:
      return applyRemoveToken(state, action);
    default:
      return state;
  }
};

const applySaveToken = (state, action) => {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
};

const applyRemoveToken = (state, action) => {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
};

export { initialState };

export default reducer;
