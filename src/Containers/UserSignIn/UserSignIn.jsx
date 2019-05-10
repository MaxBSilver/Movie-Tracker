import React, { Component } from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { addUser } from "../../Actions/index";
import { connect } from "react-redux";
import SignInUser from "./SignInForms/SignInUser";
import NewUser from "./SignInForms/NewUser";
import { Route } from "react-router-dom";

class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      newUserBool: false,
      user: {},
      status: ""
    };
  }

  handleLogin = async e => {
    e.preventDefault();
    const { name, email, password, newUserBool } = this.state;
    if (newUserBool) {
      return await this.userCreation(email, name, password);
    } else {
      return await this.userSignIn(email, password);
    }
  };

  userSignIn = async (email, password) => {
    const url = "users";
    try {
      const userResponse = await postUsers(url, "POST", { password, email });
      const { data } = userResponse;
      this.props.addUser(data);
      this.setState({ status: "Successful" });
    } catch (e) {
      this.setState({ status: "The username or password is incorrect!" });
    }
  };

  userCreation = async (email, name, password) => {
    const url = "users/new";
    await postUsers(url, "POST", { name, password, email });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleToggleForm = e => {
    e.preventDefault();
    const { newUserBool } = this.state;
    this.setState({ newUserBool: !newUserBool });
  };

  render() {
    console.log(this.state.status)
    return !this.state.newUserBool ? (
      <SignInUser
        {...this.state}
        handleChange={this.handleChange}
        handleToggleForm={this.handleToggleForm}
        handleLogin={this.handleLogin}
      />
    ) : (
      <NewUser
        {...this.state}
        handleChange={this.handleChange}
        handleToggleForm={this.handleToggleForm}
        handleLogin={this.handleLogin}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn);