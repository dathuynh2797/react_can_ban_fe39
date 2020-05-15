import React, { Component } from "react";
import XeRedux from "./XeRedux";

export default class DanhSachXeRedux extends Component {
  renderXe = () => {
    return this.props.mangSP.map((sp, index) => {
      return (
        <div className="col-3" key={index}>
          <XeRedux mangSP={sp} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh Sach Xe</h3>
        <div className="row">{this.renderXe()}</div>
      </div>
    );
  }
}
