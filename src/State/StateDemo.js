import React, { Component } from "react";

export default class StateDemo extends Component {
  // state: dùng để chứa các thuộc tính có thể thay đổi
  state = {
    status: false,
    name: "FE-39",
  };

  renderContent = () => {
    // if (this.state.status) {
    //   return <h1>Hello {this.name}</h1>;
    // }
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.logIn();
          }}
        >
          Đăng Nhập
        </button>
      </div>
    );
  };
  logIn = () => {
    //Phương thức setState() : set lại các giá trị mới cho state và gọi lại hàm render
    //this.setState là hàm bất đồng bộ
    // let newState = {
    //   status: true,
    // };
    // this.setState(newState);
    this.setState(
      {
        status: true,
        name: "New State Change",
      },
      () => {
        //   Tham số thứ 2 là hàm chạy sau khi state thay đổi và trước giao diện gọi hàm render
        console.log("status: ", this.state.status);
      }
    );
  };

  render() {
    return <div className="container m-5">{this.renderContent()}</div>;
  }
}
