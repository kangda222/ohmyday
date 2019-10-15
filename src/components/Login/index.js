import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FormField, Form, TextInput, Button } from "grommet";
import { AppContext } from "../../redux/store";
import { SAVE_TOKEN } from "../../redux/modules/user";

const Login = () => {
  const [loginData, setLoginDate] = useState({ id: "", password: "" });
  const { dispatchUser } = useContext(AppContext);
  // console.log("login useContext: ", dispatchUser);
  // console.log("login userState: ", userState);
  // console.log("login isLoggedIn: ", isLoggedIn);

  const login = (id, password) => {
    console.log(`id: ${id} password: ${password}`);
    dispatchUser({ type: SAVE_TOKEN, token: "token" });
  };

  const handleInputChange = e => {
    const {
      target: { name, value }
    } = e;
    // console.log(target);
    setLoginDate({ ...loginData, [name]: value });
  };

  const handleSubmit = e => {
    const { id, password } = loginData;
    e.preventDefault();
    login(id, password);
  };

  return (
    <Main>
      Login
      <Form onSubmit={handleSubmit}>
        <FormField label="ID">
          <TextInput
            placeholder="Id"
            name="id"
            value={loginData.id}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField label="PASSWORD">
          <TextInput
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </FormField>
        <Button type="submit" primary label="Login" />
      </Form>
    </Main>
  );
};

const Main = styled.div``;

export default Login;
