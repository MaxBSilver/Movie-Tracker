import React from "react";
import Main from "../Main/Main.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import UserSignIn from "../UserSignIn/UserSignIn";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import { Movie } from "../../Components/Movie/Movie";
import Favorites from "../Favorites/Favorites.jsx";


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={UserSignIn} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
