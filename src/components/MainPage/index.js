import React from "react";
import styled from "styled-components";
import { Button } from "grommet";
//import { Link } from "react-router-dom";

const MainPage = props => {
  return (
    <Main>
      <Title>
        <Text>Oh My Day!</Text>
      </Title>
      <BtnArea>
        <Div>
          {/* <Link to={"/login"}> */}
          <Btn
            label="Login"
            color="white"
            onClick={() => {
              props.changeAction("login");
            }}
          />
          {/* </Link> */}
          {/* <Link to={"/signup"}> */}
          <Btn
            label="Signup"
            color="white"
            onClick={() => {
              props.changeAction("signup");
            }}
          />
          {/* </Link> */}
        </Div>
      </BtnArea>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  background-color: #7d4cdb;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  flex: 2;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const BtnArea = styled.div`
  flex: 1;
`;

const Text = styled.div`
  text-align: center;
  font-size: 15vh;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled(Button)`
  margin: 2px;
`;

export default MainPage;
