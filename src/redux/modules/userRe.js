//imports
//actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

//action creators
// function saveToken(token) {
//   return {
//     type: SAVE_TOKEN,
//     token
//   };
// }

// function logout() {
//   return {
//     type: LOGOUT
//   };
// }

//API action
//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

//reducer function
function applySetToken(state, action) {
  const { token } = action;
  localStorage.set("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}

//exports
//const actionCreators = {};

//export reducer by default
export default reducer;
