import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Weather from "./pages/Weather";
import FavoriteLocation from "./pages/FavoriteLocation";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div>
        <Switch>
          <Redirect to="/weather" />
        </Switch>
        <Switch>
          <Route path="/weather" component={Weather} />
        </Switch>
        <Switch>
          <Route path="/favorite" component={FavoriteLocation}></Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
