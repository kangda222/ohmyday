import React from "react";
import styled from "styled-components";
import { Schedule, Task } from "grommet-icons";
import { Link } from "react-router-dom";

// const Navigation = withRouter(({ history }) => {
//   // const switchPage = props => {
//   //   history.push(props);
//   // };
//   return (
//     <Main>
//       <Logo>OhMyDay</Logo>
//       <Menu>
//         <Link to={`/`}>
//           <Margin>
//             <Schedule color="dark-1" />
//           </Margin>
//         </Link>
//         <Link to={`/todo`}>
//           <Margin>
//             <Task color="dark-1" />
//           </Margin>
//         </Link>
//       </Menu>
//       <Setting></Setting>
//     </Main>
//   );
// });

const Navigation = () => {
  return (
    <Main>
      <Logo>OhMyDay</Logo>
      <Menu>
        <Link to={`/`}>
          <Margin>
            <Schedule color="dark-1" />
          </Margin>
        </Link>
        <Link to={`/todo`}>
          <Margin>
            <Task color="dark-1" />
          </Margin>
        </Link>
      </Menu>
      <Setting></Setting>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #7d4cdb;
  min-height: 8vh;
`;

const Logo = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding: 1%;
`;

const Menu = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Setting = styled.div`
  flex: 3;
`;

const Margin = styled.div`
  margin: 1%;
`;

export default Navigation;
