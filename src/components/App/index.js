import React, { useContext } from "react";
//import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Grommet } from "grommet";
import Calendar from "../Calendar";
import Todo from "../Todo";
import Auth from "../Auth";
import Navigation from "../Navigation";
import GlobalStyle from "../../styles/GlobalStyle";
import { AppContext } from "../../redux/store";

const App = () => {
  const { userState } = useContext(AppContext);
  //console.log("useContext : ", userState);

  return (
    <>
      <GlobalStyle />
      <Grommet>
        {userState.isLoggedIn ? <Navigation /> : null}
        {userState.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
      </Grommet>
    </>
  );
};

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path="/" component={Calendar} />
    <Route key="2" exact path="/todo" component={Todo} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    {/* <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} /> */}
  </Switch>
);

//style

export default App;
