import React, { Component } from "react";
import "./UserList.scss";

// UserList component is responsible for rendering the list of users in the chat
class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        <div className="user-list">
          <p className="usersLabel">Users: </p>
          {this.props.userList.map((user, index) => (
            <p key={index} className="user" style={{ color: user.color }}>
              {user.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
