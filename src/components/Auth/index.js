import React, { useState } from "react";
import MainPage from "../MainPage";
import Login from "../Login";
import SignUp from "../SignUp";

const Auth = () => {
  const [actionData, setAction] = useState({ action: "main" });
  //console.log("auth : ", actionData);
  const changeAction = action => {
    setAction({ action });
  };

  return (
    <>
      {actionData.action === "main" && <MainPage changeAction={changeAction} />}
      {actionData.action === "login" && <Login />}
      {actionData.action === "signup" && <SignUp />}
    </>
  );
};

export default Auth;
