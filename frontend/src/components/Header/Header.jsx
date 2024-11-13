import React, { Component } from "react";
import auth from "../../authorization/auth";
import { withRouter } from "react-router-dom";
import "./Header.scss";

// Header component is responsible for rendering the header of the chat page
class Header extends Component {
  handleLogout() {
    auth.logout(() => {
      return this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="header">
        <h2>Yang Chat</h2>
        <button
          className="logout-button"
          onClick={() => {
            this.handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
