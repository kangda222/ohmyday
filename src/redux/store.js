import React, { createContext, useReducer, useEffect } from "react";
import user, { initialState as userInitState } from "./modules/user";

export const AppContext = createContext({
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
});

const Store = props => {
  const [userState, dispatchUser] = useReducer(user, userInitState);

  useEffect(() => {
    console.log(`new data rendering...`);
  }, [userState]);

  return (
    <AppContext.Provider value={{ userState, dispatchUser }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
