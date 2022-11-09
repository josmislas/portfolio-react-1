import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("Handle submit", event);
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCES YOUR DASHBOARD</h1>

        <h2>{this.state.email}</h2>
        <h2>{this.state.password}</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;