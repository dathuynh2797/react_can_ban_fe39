import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleOnclick = (message) => {
    alert(message);
  };
  showMess = (title) => {
    alert(title);
  };
  showMessCallBack = (title, tag) => {
    console.log(title);
    console.log(tag.target);
  };
  render() {
    return (
      <div>
        {/* Định nghĩa function trực tiếp */}
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            this.showMess("hello");
          }}
        >
          Click Me !!!
        </button>
        {/* Định nghĩa với callback function */}
        <button id="btn" onClick={() => this.handleOnclick("alo alo")}>
          Click Me !!!
        </button>
        <button id="btn" onClick={this.showMessCallBack.bind(this, "Message")}>
          Click Me Callback!!!
        </button>
      </div>
    );
  }
}
