import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./Login.css";

const loginHost = "https://reactchallenge.free.beeceptor.com/login";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: { username: "", password: "" }
    };
  }
  componentDidMount() {
    this.renderRedirect();
  }

  handleLoginUsernameChange = event => {
    this.setState({ login: { username: event.target.value } });
  };

  handleLoginPasswordChange = event => {
    this.setState({ login: { password: event.target.value } });
  };
  handleLoginSubmit = event => {
    let data = {
      name: this.state.login.username,
      password: this.state.login.password
    };
    this.postLogin(data);
    event.preventDefault();
  };

  postLogin = data => {
    const self = this;
    axios.post(loginHost, data).then(function(response) {
      console.log(response);
      localStorage.setItem("nama", response.data.nama);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("isLogin", 1);
      self.props.history.push("/");
    });
  };

  renderRedirect = () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    console.log(isLogin);
    if (isLogin == 1) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="login">
        {this.renderRedirect()}
        <LoginForm
          onUsernameChange={this.handleLoginUsernameChange}
          onPasswordChange={this.handleLoginPasswordChange}
          onSubmit={this.handleLoginSubmit}
          data={this.state.login}
        />
      </div>
    );
  }
}

export default Login;
