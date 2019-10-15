import React, { useState } from "react";
import styled from "styled-components";
import { FormField, Form, TextInput, Button } from "grommet";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    id: "",
    password: "",
    password2: ""
  });

  const signUp = (id, password) => {
    console.log(`signUp id: ${id} password: ${password}`);
  };

  const handleInputChange = e => {
    const {
      target: { name, value }
    } = e;
    // console.log(target);
    setSignupData(prevState => {
      //console.log(prevState);
      if (name.includes("password")) {
        if (prevState.password === value || prevState.password2 === value) {
          console.log("일치");
        } else {
          console.log("불일치");
        }
      }
      return { ...signupData, [name]: value };
    });
  };

  const handleSubmit = e => {
    // console.log(signupData);
    const { id, password } = signupData;
    e.preventDefault();
    signUp(id, password);
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <FormField label="ID">
          <TextInput
            placeholder="Id"
            name="id"
            value={signupData.id}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField label="PASSWORD">
          <TextInput
            type="password"
            placeholder="Password"
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField label="PASSWORD">
          <TextInput
            type="password"
            placeholder="Password again"
            name="password2"
            value={signupData.password2}
            onChange={handleInputChange}
          />
        </FormField>
        <Button type="submit" primary label="Signup" />
      </Form>
    </Main>
  );
};

const Main = styled.div``;

export default SignUp;
