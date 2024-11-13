import React, { Component } from "react";
import "./ChatInput.scss";

// ChatInput component is responsible for rendering the chat input
class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <input onKeyDown={this.props.send} />
      </div>
    );
  }
}

export default ChatInput;
